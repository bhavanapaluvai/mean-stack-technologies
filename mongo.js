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
//const data = new nm({name:'Bhavana',age:20,phno:8587887443});
//const d1 = new nm({name:'Teja',age:20,phno:8947543873});
//data.save(); 
//d1.save();

nm.insertMany([{name:'Raju',age:32,phno:8587887434},
               {name:'Rani',age:40,phno:8587834443},
               {name:'Ram',age:32,phno:8587887422}
]).then(function(){
     console.log("Data inserted")
}).catch(function(error){
     console.log(error)
});

