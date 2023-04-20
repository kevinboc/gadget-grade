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
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(500).send({message: 'An error occurred while retrieving the products.'});
    }
};

exports.getCategory = async function(req,res) {
  try {
    const products = await   Product.find({category: req.params.category})
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send({message: 'An error occurred retrieving category.'});
  }
}

exports.getProduct = async function(req, res) {
  console.log(req.params._id);
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


