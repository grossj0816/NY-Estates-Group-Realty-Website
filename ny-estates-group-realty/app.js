const express = require("express");
const app = express();
const path = require("path");


app.use(express.static('public'));
app.use(express.static('views'));


app.get('/IndexPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'IndexPage.html'));
});

app.get('/MissionPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'MissionPage.html'));
});

app.get('/ServicesPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'ServicesPage.html'));
});

app.get('/TeamPage.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamPage.html'));
});

app.get('/TeamMemberPage1.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage1.html'));
});

app.get('/TeamMemberPage2.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage2.html'));
});

app.get('/TeamMemberPage3.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage3.html'));
});

app.get('/TeamMemberPage4.html', function(req, res){
  res.sendFile(path.join(__dirname+'TeamMemberPage4.html'));
});

app.listen(3000, function(){
  console.log('Server started on port 3000...');
});
