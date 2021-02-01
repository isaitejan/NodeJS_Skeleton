const express = require("express");
const app = express();
const reqlog = require('./utilities/requestlogger.js');
const errlog = require('./utilities/errorlogger.js');
const bodyparser = require('body-parser');
const router = require('./routes/routing');

app.use(bodyparser.json());

app.use(reqlog);

app.use(router);

app.use(errlog);

app.listen(2050);
console.log('Server started at port no 2050');