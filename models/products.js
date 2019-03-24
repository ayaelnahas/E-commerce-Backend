const productDatabase = require('../database/database');

const getProductKey = ( id ) => `products.${id}`;

module.exports = {
    getAll() {
      return Object.values(productDatabase.get('products'));
    },
    getById(id) {
      return productDatabase.get(`products.${id}`);
    },
    add(product) {
      let products = productDatabase.get('products');
      let sortedIds = Object.keys(products).sort().reverse();
      let id = sortedIds[0] || 0;
      product.id = Number(id) + 1;
      const keyName = getProductKey(product.id);
      productDatabase.set(keyName, product);
      return product;
    },
    delete(id, returnOriginal){
      let product = returnOriginal && this.getById(id);
      const keyName = getProductKey(id);
      productDatabase.del(keyName);
      return product;
    },
    patch(id, productUpdate) {
      const product = this.getById(id);
      Object.assign(product, productUpdate);
      const key = getProductKey(id);
      productDatabase.set(key, product);
      return product;
    }
  }
