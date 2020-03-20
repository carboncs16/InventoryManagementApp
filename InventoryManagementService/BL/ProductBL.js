var productBusLog = {};
var productDB = require('../DAL/ProductDAL');

productBusLog.getProducts = () => {
    return productDB.getProducts();
}

productBusLog.getProductById = (id) => {
    return productDB.getProductById(id);
}

productBusLog.addProduct = (product) => {
    return productDB.addProduct(product);
}

productBusLog.deleteProduct = (id) => {
    return productDB.deleteProduct(id);
}

productBusLog.updateProduct = (data) => {
    return productDB.updateProduct(data._id, data);
}

module.exports = productBusLog;