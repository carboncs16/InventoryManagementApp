var express = require('express');
let jwt = require('jsonwebtoken');
let config = require('../config/config');
var routing = express.Router();
var auth = require('../middleware/auth')

var userBusLog = require('../BL/UserBL');
var productBusLog = require('../BL/ProductBL');

//User LOGIN
routing.post('/login', (req, res, next) => {
    var uEmail = req.body.username;
    var uPass = req.body.password;
    return userBusLog.loginUser(uEmail, uPass).then((item) => {
        let token = jwt.sign({ username: uEmail },
            config.secret,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );
        res.json({ userData: item, token: token });
    }).catch(function (err) {
        next(err);
    });;
});

//User LOGOUT
routing.get('/logout', function (req, res, next) {
    var newUser = req.body;
    return userBusLog.logoutUser(newUser).then((item) => {
        res.json(item);
        res.json({ "message": "User logged out successfully" });
    }).catch(function (err) {
        next(err);
    });
});

//User Register
routing.post('/register', (req, res, next) => {
    var newUser = req.body;
    return userBusLog.registerUser(newUser).then((items) => {
        res.json({ "message": "User Successfully registered" });
    }).catch(function (err) {
        next(err)
    });
});

//Get all products
routing.get('/getProducts', auth.checkToken, (req, res, next) => {
    return productBusLog.getProducts().then((items) => {
        res.json(items);
    }).catch(function (err) {
        next(err)
    });
});

routing.get('/getProduct/:id', auth.checkToken, (req, res, next) => {
    return productBusLog.getProductById(req.params.id).then((items) => {
        res.json(items);
    }).catch(function (err) {
        next(err)
    });
});

routing.post('/addProduct', auth.checkToken, (req, res, next) => {
    return productBusLog.addProduct(req.body)
        .then(response => {
            res.json(response);
        }).catch(function (err) {
            next(err)
        });
});

routing.post('/deleteProduct', auth.checkToken, (req, res, next) => {
    return productBusLog.deleteProduct(req.body._id)
        .then(response => {
            res.json(response);
        }).catch(function (err) {
            next(err)
        });
});

routing.put('/updateProduct', auth.checkToken, (req, res, next) => {
    return productBusLog.updateProduct(req.body)
        .then(response => {
            res.json(response);
        }).catch(function (err) {
            next(err)
        });
});

module.exports = routing;