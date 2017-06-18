const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

//connects to local databse
mongoose.connect('mongodb://localhost/nyestatesdb');
let db = mongoose.connection;



db.once('open', function(){
  console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function(err){
  console.log(err);
});


//initialize app
const app = express();

//initialize Static files for use
app.use(express.static('public'));
app.use(express.static('views'));



//Bring in Models
let Article = require('./models/article');

//Home Route
app.get('/IndexPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'IndexPage.html'));
});

//About Page Route
app.get('/MissionPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'MissionPage.html'));
});

//Services Page Route
app.get('/ServicesPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'ServicesPage.html'));
});

//Team Page Route
app.get('/TeamPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamPage.html'));
});

//Employee Bio Route
app.get('/TeamMemberPage1.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage1.html'));
});

//Employee Bio Route
app.get('/TeamMemberPage2.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage2.html'));
});

//Employee Bio Route
app.get('/TeamMemberPage3.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage3.html'));
});

//Employee Bio Route
app.get('/TeamMemberPage4.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage4.html'));
});

app.listen(4000, function () {
  console.log('Listening listening on port 4000!')
})
