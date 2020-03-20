var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    productName: String,
    price: Number,
    rating: Number
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL || `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

var productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
