require('dotenv').config();
var app = require('express')();
var bodyParser = require("body-parser");
var cors = require('cors');
var router = require('./routes/router.js');
var appPort = 7000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/', router);

app.listen(appPort);
console.log("User Micro Server Started at port:", appPort);