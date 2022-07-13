//jshint esversion:6

const express = require("express");

const app = express();
app.use(express.static('public'));

var x = 15;

app.get("/", function(request, response){
  response.sendFile('C:/Users/shawn/new2/public/index.html');
});

app.get("/contact", function(request, response){
  response.send('Contact me at musamarket@gmail.com');
});

app.get("/about", function(request, response){
  response.send('<h3>I am Shawntez I love basketball  and coding.</h3>');
});

app.listen(3000, function(){
  console.log('Server started on Port 3000!');
});