const Store = require('data-store');
const categoryDatabase = new Store({ path: '.config/categoryStore.json' });

module.exports = categoryDatabase;
