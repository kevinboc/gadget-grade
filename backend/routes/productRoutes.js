const express = require('express')
const router = express.Router()
var controller = require('../controllers/productController.js');
  
router.route("")
    .get(controller.getAllProducts)
    .post(controller.addProduct);

router.route("/:_PID")
    .get(controller.getProduct)
    .put(controller.updateProduct)

router.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = router