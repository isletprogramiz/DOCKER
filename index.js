const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

var uri = "mongodb://127.0.0.1:27017/mydb";
mongoose.connect(uri)
.then(res=>{
    console.log("db connected!");
})
.catch(error =>{
    console.log("error found");
})
const app = express();
app.get('/',(req,res)=>{
    res.send("its working");
})
app.listen(5000,()=>{
    console.log("working")
})