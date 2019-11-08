var mongoose = require('mongoose');
var productSchema = require('../Schema/ProductSchema');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/InvertoryManagement', { useNewUrlParser: true, useUnifiedTopology: true });

var productModel = mongoose.model('Product', productSchema);
var product = {};

product.getProducts = () => {
    return productModel.find()
        .then(res => {
            return res;
        })
        .catch(err => {
            throw new Error(err);
        });
}

product.addProduct = (product) => {
    return productModel.insertMany(product)
        .then(res => {
            return res;
        })
        .catch(err => {
            throw new Error(err);
        });
}

product.deleteProduct = (id) => {
    return productModel.findByIdAndDelete(id)
        .then(res => {
            return res;
        })
        .catch(err => {
            throw new Error(err);
        });
}

product.updateProduct = (id, data) => {
    return productModel.findByIdAndUpdate(id,
        { productName: data.productName, price: data.price, rating: data.rating })
        .then(res => {
            return res;
        })
        .catch(err => {
            throw new Error(err);
        });
}

module.exports = product;