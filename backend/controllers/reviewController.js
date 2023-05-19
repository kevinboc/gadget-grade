var mongoose = require('mongoose'),
Review = mongoose.model('Review');
Product = mongoose.model('Product');
User = mongoose.model('User');
var ObjectID = require('mongodb').ObjectID;

exports.addReview = async function(req, res) {
    // create new review object
    var newReview = new Review(req.body);
    try {
      // save review
      const savedReview = await newReview.save();
      // get product associated with review
      const product = await Product.findById(req.body.product);
      //get user
      const author = await User.findById(req.body.author);
      // calculate new product rating
      product.reviewCount++;
      product.ratingCount =  Number(product.ratingCount) + Number(req.body.rating);
      product.rating = Number(product.ratingCount / product.reviewCount).toFixed(1);
      const updatedProduct = await Product.findByIdAndUpdate(req.body.product, product, {new:true});
      author.reviews++;
      const updatedUser = await User.findByIdAndUpdate(req.body.author, author, {new:true})
      // update product in db
      res.status(201).json(savedReview);
    } catch (err) {
      console.log(err)
      res.status(500).send({message: 'An error occurred while adding the review.'});
    }
};
  
exports.getProductReviews = async function (req, res) {
  try {
      // Read sorting parameters from query string
      const sortField = req.query.sort;
      const sortOrder = req.query.order === 'desc' ? -1 : 1; // Use 1 for ascending, -1 for descending
      // Build the sort object
      const sortObject = {};
      if (sortField) {
          sortObject[sortField] = sortOrder;
      }
      // Find and sort the reviews
      const reviews = await Review.find({ product: req.params.productId }).sort(sortObject).populate('author');
      res.status(200).json(reviews);
  } catch (err) {
      res.status(500).send({ message: 'An error occurred while getting the product reviews.' });
  }
};

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
        const reviews = await Review.find({})
        .populate('author')
        .populate('product')
        .sort({timeStamp: -1})
        .limit(10);
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
      console.log(err)
      res.status(500).send({message: 'An error occurred updating review.'});
    }  
  }
