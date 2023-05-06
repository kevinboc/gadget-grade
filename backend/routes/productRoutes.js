const express = require('express')
const router = express.Router()
var controller = require('../controllers/productController.js');
  
router.route("")
    .get(controller.getAllProducts)
    .post(controller.addProduct)

router.route("/category/:category")
    .get(controller.getCategory)

router.route("/trending")
    .get(controller.getTrendingProducts)

router.route("/:_id")
    .get(controller.getProduct)
    .put(controller.updateProduct)

router.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = router