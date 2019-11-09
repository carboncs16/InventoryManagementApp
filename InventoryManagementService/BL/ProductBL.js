var productBusLog = {};
var productDB = require('../DAL/ProductDAL');

productBusLog.getProducts = () => {
    return productDB.getProducts()
        .then(res => {
            return res;
        });
}

productBusLog.getProductById = (id) => {
    return productDB.getProductById(id)
        .then(res => {
            return res;
        });
}

productBusLog.addProduct = (product) => {
    return productDB.addProduct(product)
        .then(res => {
            return res;
        });
}

productBusLog.deleteProduct = (id) => {
    return productDB.deleteProduct(id)
        .then(res => {
            return res;
        });
}

productBusLog.updateProduct = (data) => {
    return productDB.updateProduct(data._id, data)
        .then(res => {
            return res;
        });
}

module.exports = productBusLog;