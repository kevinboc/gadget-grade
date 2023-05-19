const express = require('express')
const router = express.Router()
var controller = require('../controllers/commentController.js');
  
router.route("")
    .post(controller.addComment);

router.route("/review/:reviewId")
    .get(controller.getReviewComments);

router.route("/product/:productId")
    .get(controller.getProductComments);

router.route("/user/:userId")
    .get(controller.getUserComments);

router.route("/:_id")
    .get(controller.getComment)
    .put(controller.updateComment);

router.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = router