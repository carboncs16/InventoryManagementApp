var express = require('express');
var routing = express.Router();

var userBusLog = require('../BL/UserBL');
var productBusLog = require('../BL/ProductBL'); 

//User LOGIN
routing.post('/login', (req,res,next) => {
    var uEmail= req.body.username;
    var uPass=req.body.password;
    return userBusLog.loginUser(uEmail, uPass).then((item) => {
        res.json(item);
    }).catch(function (err) {
        next(err);
    });;
});

//User LOGOUT
routing.get('/logout', function(req,res,next){
    var newUser = req.body;
    return userBusLog.logoutUser(newUser).then((item) => {
        res.json(item);
        res.json({"message":"User logged out successfully"} );
    }).catch(function (err) {
        next(err);
    });
});

//User Register
routing.post('/register', (req,res,next) => {
    var newUser=req.body;
    return userBusLog.registerUser(newUser).then((items) => {
        res.json({"message":"User Successfully registered"})
    }).catch(function(err){
        next(err)
    })
});

module.exports = routing;