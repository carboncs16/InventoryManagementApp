var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/InvertoryManagement', { useNewUrlParser: true, useUnifiedTopology: true });

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
