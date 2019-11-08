var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    productName: String,
    price: Number,
    rating: Number
});

module.exports = productSchema;
