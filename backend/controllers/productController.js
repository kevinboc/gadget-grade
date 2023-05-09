var mongoose = require('mongoose'),
Product = mongoose.model('Product');
var ObjectID = require('mongodb').ObjectID;

exports.addProduct = async function(req, res) {
    var newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(500).send({message: 'An error occurred while saving the product.'});
    }
};
  
exports.getAllProducts = async function(req, res) {
    try {
      const sortField = req.query.sort;
      const sortOrder = req.query.order === 'desc' ? -1 : 1; // Use 1 for ascending, -1 for descending
      // Build the sort object
      const sortObject = {};
      if (sortField) {
          sortObject[sortField] = sortOrder;
      }
      const products = await Product.find({}).sort(sortObject);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).send({message: 'An error occurred while retrieving the products.'});
    }
};

exports.getCategory = async function(req,res) {
  try {
    const sortField = req.query.sort;
    const sortOrder = req.query.order === 'desc' ? -1 : 1; // Use 1 for ascending, -1 for descending
    // Build the sort object
    const sortObject = {};
    if (sortField) {
        sortObject[sortField] = sortOrder;
    }
    const products = await   Product.find({category: req.params.category}).sort(sortObject);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send({message: 'An error occurred retrieving category.'});
  }
}

exports.getProduct = async function(req, res) {
  try {
    const product = await Product.findById(req.params._id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send({message: 'Product not found.'});
    }
  } catch (err) {
    res.status(500).send({message: 'An error occurred retrieving product.'});
  }
}


exports.updateProduct = async function(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params._id, req.body, {new:true});
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).send({message: 'An error occurred updating product.'});
  }  
}

exports.searchProducts = async function(req, res) {
  const searchTerm = req.params.searchTerm;
  if (!searchTerm) {
      res.status(400).json({ message: 'Search term is required' });
      return;
  }
  try {
      const products = await Product.find({$text: {$search: searchTerm}});
      res.status(200).json(products);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while searching for products' });
  }
};

exports.getTrendingProducts = async function(req, res) {
    try {
        const trendingProducts = await getTrendingProducts();
        res.status(200).json(trendingProducts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while fetching trending products' });
    }
};

// import Moment.js for date manipulation
const moment = require('moment'); 
async function getTrendingProducts() {
  // get the date one week ago
  const oneWeekAgo = moment().subtract(7, 'days').toDate();
  const recentReviews = await Review.aggregate([
    // find reviews from the past week
    {$match: {timeStamp: {$gte: oneWeekAgo}}},
    {$group: {_id: '$product', count: {$sum: 1}}},
    // sort by review count in descending order
    {$sort: {count: -1}},
    // limit the result to 5 products
    {$limit: 5} 
  ]);
  // get the product IDs from the aggregation result
  const productIds = recentReviews.map(review => review._id);
  // fetch product details using the product IDs
  const products = await Product.find({ _id: {$in: productIds}});
  return products;
}