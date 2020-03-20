var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
