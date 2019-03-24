const categoryDatabase = require('../database/database');
const getCategoryName = (name) => `categories.${name}`;

module.exports = {
  getAll() {
    return Object.values(categoryDatabase.get('categories'));
  },

  getByName(name) {
    return categoryDatabase.get(`categories.${name}`);
  },
  add(category) {
    const keyName = getCategoryName(category.name);
    if (categoryDatabase.hasOwn(keyName)) throw new Error('id already exists');
    return categoryDatabase.set(keyName, category);
  },
  delete(name) {
    const keyName = getCategoryName(name);
    return categoryDatabase.del(keyName);
  },
  patch(name, categoryUpdate) {
    const category = this.getByName(name);
    Object.assign(category, categoryUpdate);
    const key = getCategoryName(name);
    return categoryDatabase.set(key, category);
  }
}
