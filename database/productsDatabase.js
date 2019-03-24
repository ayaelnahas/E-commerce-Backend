const Store = require('data-store');
const productDatabase = new Store({ path: '.config/productStore.json' });

module.exports = productDatabase;
