var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var connection = require('./config');
var authenticatecontroller = require('./authenticate-controller');
var registercontroller = require('./register-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res) { 
 res.sendFile(__dirname + "/" + "index.html");
});
app.get('/login.html',function (req,res) {
 res.sendFile(__dirname + "/" + "login.html");
});

app.post('/api/authentiate',authenticatecontroller.authenticate);

app.listen(8000);
