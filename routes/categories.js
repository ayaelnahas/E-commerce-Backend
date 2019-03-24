const express = require('express');
const router = express.Router();
const categories = require('../models/categories');
const Products = require('../models/products');

router.get('/', (req, res, next) => {
  let allCategories = categories.getAll();
  res.send(allCategories);
});

router.post('/', (req, res, next) => {
  let addedCategory = categories.add(req.body);
  res.send(addedCategory);
});


router.get('/:categoryName', (req, res, next) => {
  let categoryName = categories.getByName(req.params.categoryName);
  let products = categoryName.relatedProducts;
  let relatedProducts = []
  for (const productId of products) {
    relatedProducts.push(Products.getById(productId))
  }
  res.send(relatedProducts);
});


router.delete('/:categoryName', (req, res, next) => {
  let toBeDeleted = categories.delete(req.params.categoryName, true);
  res.send(toBeDeleted);
});


router.patch('/:categoryName', (req, res, next) => {
  let updated = categories.patch(req.params.categoryName, req.body);
  res.send(updated);
});


module.exports = router;
