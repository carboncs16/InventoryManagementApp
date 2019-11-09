var userModel = require('../Schema/UserScehma');
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