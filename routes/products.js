const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const Product = require('../models/products');


// if function to be called need some time like the (product.save) better put it async/ await
router.post('/', async (req, res, next) => {
  const product = await Product.create(req.body).catch(console.error);
  if (!product) next(createError(400));
  else res.send(product);
});

router.get('/', (req, res, next) => {
  Product.find({}, function (err, docs) {
    if (err) return next(createError(400, err));
    res.send(docs);
  });
});

router.get('/products/:userID', (req, res, next) => {
  Product.find({addedBy: req.params.userID}, function (err, docs) {
    if (err) return next(createError(400, err));
    res.send(docs);
  });
});


router.get('/:productId', (req, res, next) => {
  Product.findById(req.params.productId, function (err, adventure) {
    if (err) return next(createError(400, err));
    res.send(adventure);
  });
});


router.delete('/:productId', (req, res, next) => {
  Product.findByIdAndRemove(req.params.productId, function (err, deleted) {
    if (err) return next(createError(400, err));
    res.send(deleted);
  })
});


// router.patch('/:productId', (req,res,next) => {
//   let updated = Products.patch(req.params.productId, req.body);
//   res.send(updated);
// });


module.exports = router;
