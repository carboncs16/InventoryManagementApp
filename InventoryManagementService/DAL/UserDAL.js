var mongoose = require('mongoose');
var userSchema = require('../Schema/UserScehma');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/InvertoryManagement', { useNewUrlParser: true, useUnifiedTopology: true });

var userModel = mongoose.model('User', userSchema);
var user = {};

user.register = (user) => {
    return userModel.insertMany(user)
        .then(res => {
            if (res) {
                return res;
            } else {
                throw new Error('Data insertion failed');
            }
        });
}

user.login = (username, password) => {
    return userModel.findOne({
        username: username,
        password: password
    }).then(res => {
        if (res) {
            return res;
        } else {
            throw new Error('User not found');
        }
    });
}

module.exports = user;