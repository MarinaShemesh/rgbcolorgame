var express = require('express');
var app = express();

// process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8080, function() {
  console.log("Ears open on 8080.")

});

