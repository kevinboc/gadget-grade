var mongoose = require('mongoose'),
Review = mongoose.model('Review');
var ObjectID = require('mongodb').ObjectID;

exports.addReview = async function(req, res) {
    var newReview = new Review(req.body);
    try {
      const savedReview = await newReview.save();
      res.status(201).json(savedReview);
    } catch (err) {
      res.status(500).send({message: 'An error occurred while adding the review.'});
    }
};
  
exports.getProductReviews = async function(req, res) {
    try {
        const reviews = await Review.find({product: req.params.productId})
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).send({message: 'An error occurred while getting the product reviews.'});
    }
}

exports.getUserReviews = async function(req, res) {
    try {
        const reviews = await Review.find({author: req.params.userId})
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).send({message: 'An error occurred while getting the user reviews.'});
    }
}

exports.getRecentReviews = async function(req, res) {
    try {
        const reviews = await Review.find({}).sort({timeStamp: -1}).limit(10);
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).send({message: 'An error occurred while getting the user reviews.'});
    }
}

exports.getReview = async function(req, res) {
    try {
      const review = await Review.findById(req.params._id);
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).send({message: 'Review not found.'});
      }
    } catch (err) {
      res.status(500).send({message: 'An error occurred retrieving review.'});
    }
  }
  
  
  exports.updateReview = async function(req, res) {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params._id, req.body, {new:true});
        res.status(200).json(updatedReview);
    } catch (err) {
      res.status(500).send({message: 'An error occurred updating review.'});
    }  
  }
  