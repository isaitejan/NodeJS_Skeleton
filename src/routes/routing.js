const express = require('express');
const routing = express.Router();

routing.get('/basic',(req,res,next)=>{
    res.send("Hello World!!");
    // res.json({"message":"Hello World!!"});
})

module.exports = routing;