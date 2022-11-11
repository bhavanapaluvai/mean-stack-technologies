const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/CSE_C",(err)=>{
if(err)
console.log("DB not connected-Error");
else
console.log("DB Connected");
});

const ns= new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm = new mongoose.model("records",ns);

nm.findOne({name:'Bhavana'},function(err,data){
if(err){
    console.log(err);
}
else{
    console.log("First Function call: ",data);
}
});