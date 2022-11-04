var express = require('express')
var app = express()
app.get('/',function(req,res) {
   res.send('This is a sample Example for Express.js')
})

app.get('/cse',function(req,res) {
   res.send('Welcome to CSE')
})

app.get('/ece',function(req,res) {
   res.send('Welcome to ECE')
})

app.get('/eee',function(req,res) {
   res.send('Welcome to EEE');
})

app.get('/mech',function(req,res) {
   res.send('Welcome to Mechanical')
})

var server = app.listen(8000,function(){
   console.log("LISTENING TO THE PORT NUMBER 8000")
})