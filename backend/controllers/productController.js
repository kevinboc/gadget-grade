var mongoose = require('mongoose'),
Product = mongoose.model('Product');
var ObjectID = require('mongodb').ObjectID;

exports.addProduct = async function(req, res) {
    console.log(req.body);
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
  

exports.updateProduct = function(req, res) {
  Product.findOneAndUpdate({"_PID": req.params._id}, req.body, {new:true}, (err, result) => {
    if (err) res.send(err)
    res.json(result);
  })
}

exports.getProduct = function(req, res) {
  Product.findById(req.params._id, (err, result) => {
    if (err) res.send(err);
    res.json(result);
  })
}
