var express = require('express')
var app = express()
app.get('/',function(req,res) {
   res.send('This is a sample Example for Express.js')
})

app.get('/Wel',function(req,res) {
   res.send('Welcome to node express.js')
})

app.get('/hello',function(req,res) {
   res.send('Hello page!')
})

app.get('/bye',function(req,res) {
   res.send('Bye Page');
})

app.get('/thank',function(req,res) {
   res.send('Thank You Page.')
})

var server = app.listen(8000,function(){
   console.log("LISTENING TO THE PORT NUMBER 8000")
})