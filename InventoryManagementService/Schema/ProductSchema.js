var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    productName: String,
    price: Number,
    rating: Number
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/InvertoryManagement', { useNewUrlParser: true, useUnifiedTopology: true });

var productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
