const express = require('express')
const router = express.Router()
var controller = require('../controllers/reviewController.js');
  
router.route("")
    .get(controller.getRecentReviews)
    .post(controller.addReview);

router.route("/product/:productId")
    .get(controller.getProductReviews);

router.route("/user/:userId")
    .get(controller.getUserReviews);

router.route("/:_id")
    .get(controller.getReview)
    .put(controller.updateReview);

router.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = router