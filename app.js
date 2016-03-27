'use strict';

var express = require('express'),
   path = require('path'),
   parser = require('body-parser');


// Routes
var router = require('./routes/api');
var app = express();
var main = express.Router();


require('./database');
// require('./seed');


app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(parser.json());



// ==============================================================
// Routing Section
// ==============================================================


// home page route (http://localhost:8080)
main.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// publication page route (http://localhost:8080/about)
main.get('/publication', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// contact page route (http://localhost:8080/about)
main.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// music page route (http://localhost:8080/about)
main.get('/music', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// work page route (http://localhost:8080/about)
main.get('/work', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// service page route (http://localhost:8080/about)
main.get('/webdev', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// about page route (http://localhost:8080/about)
main.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// journal page route (http://localhost:8080/about)
main.get('/journal/:id?', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist/', 'index.html'));
});

// apply the routes to our application
app.use('/api', router);
app.use('/', main);

// =======================================================






app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});


