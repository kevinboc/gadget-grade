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

exports.getCategory = async function(req, res) {
  try {
      const sortField = req.query.sort;
      const sortOrder = req.query.order === 'desc' ? -1 : 1; // Use 1 for ascending, -1 for descending
      const sortObject = {};
      if (sortField) {
          sortObject[sortField] = sortOrder;
      }
      
      // Split categories into AND and OR groups
      const categoryGroups = req.params.category.split('+');
      const orCategories = categoryGroups[0].split('-');
      const andCategories = categoryGroups.length > 1 ? categoryGroups[1].split('-') : [];

      // Build regular expressions for each category
      const orCategoryRegexes = orCategories.map(category => new RegExp(`^${category}$`, 'i'));
      const andCategoryRegexes = andCategories.map(category => new RegExp(`^${category}$`, 'i'));

      // Build the query object
      const queryObject = {};
      if (orCategoryRegexes.length > 0) {
          queryObject.categories = {$in: orCategoryRegexes};
      }
      if (andCategoryRegexes.length > 0) {
          queryObject.categories = {...queryObject.categories, $all: andCategoryRegexes};
      }

      const products = await Product.find(queryObject).sort(sortObject);
      res.status(200).json(products);
  } catch (err) {
      res.status(500).send({message: 'An error occurred retrieving category.'});
  }
};



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


