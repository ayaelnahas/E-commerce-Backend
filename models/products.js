const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  discount: { type: Number, default: false },
  category: { type: String },
  addedBy: { type: String }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


