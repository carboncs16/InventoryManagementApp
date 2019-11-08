var userBusLog = {};
var userDB = require('../DAL/UserDAL');

userBusLog.loginUser = (username, password) => {
    return userDB.login(username, password).then(function (item) {
        return item;
    })
}

userBusLog.registerUser = (user) => {
    return userDB.register(user).then(function (message) {
        return message
    })
}

userBusLog.logoutUser = () => {
    return userDB.userLogout().then(function (item) {
        if (item.length >= 1) {
            return;
        }
        else {
            throw new Error("The data is not available");
        }
    });F
}

module.exports = userBusLog;