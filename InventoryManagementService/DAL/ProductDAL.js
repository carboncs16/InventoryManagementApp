var productModel = require('../Schema/ProductSchema');
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

product.getProductById = (id) => {
    return productModel.findById(id)
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