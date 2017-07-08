const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

//initialize app
const app = express();

//connects to local databse
mongoose.connect('mongodb://localhost/nyestatesdb');
let db = mongoose.connection;


//Check for DB Connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function(err){
  console.log(err);
});


//initialize Static files for use
app.use(express.static('public'));
app.use(express.static('views'));

app.set('view engine', 'ejs')

//Bring in Models
let Article = require('./models/article');

//Home Route
app.get('/IndexPage', function(req, res){
  res.render('IndexPage');
});

//About Page Route
app.get('/MissionPage', function(req, res){
  res.render('MissionPage');
});

//Services Page Route
app.get('/ServicesPage', function(req, res){
  res.render('ServicesPage');
});

//Team Page Route
app.get('/TeamPage', function(req, res){
  res.render('TeamPage');
});

//Employee Bio1 Route
app.get('/TeamMemberPage1', function(req, res){
  res.render('TeamMemberPage1');
});

//Employee Bio2 Route
app.get('/TeamMemberPage2', function(req, res){
  res.render('TeamMemberPage2');
});

//Employee Bio3 Route
app.get('/TeamMemberPage3', function(req, res){
  res.render('TeamMemberPage3');
});

//Employee Bio4 Route
app.get('/TeamMemberPage4', function(req, res){
  res.render('TeamMemberPage4');
});

//Employee Bio Route
app.get('/ForSalePage', function(req, res){
  //Finding all the listings(articles),
  //and rendering the retrieved articles in
  //the ForSalePage.
  Article.find({}, function(err, articles) {
    if(err){
      console.log(err);
    }
    else{
    res.render('ForSalePage', {
        articles:articles
     });
    }
  })
});
app.listen(3000, function () {
  console.log('Server listening on port 3000!')
})
