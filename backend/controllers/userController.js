var mongoose = require('mongoose'),
User = mongoose.model('User');
var ObjectID = require('mongodb').ObjectID;

exports.addUser = async function(req, res) {
    var newUser = new User(req.body);
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).send({message: 'An error occurred while adding the user.'});
    }
};
  
exports.getAllUsers = async function(req, res) {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send({message: 'An error occurred while retrieving the users.'});
    }
};

exports.getUser = async function(req, res) {
  try {
    const user = await User.findById(req.params._id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send({message: 'User not found.'});
    }
  } catch (err) {
    res.status(500).send({message: 'An error occurred retrieving user.'});
  }
}


exports.updateUser = async function(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params._id, req.body, {new:true});
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send({message: 'An error occurred updating user.'});
  }  
}

exports.verifyLogin = async function(req,res) {
  try {
    const user = await User.findOne({username: req.body.username});
    if (user) {
      if(user.password == req.body.password) {
        res.status(200).json(user);
      } else {
        res.status(500).send({message: 'Login not valid.'});
      }
    } else {
      res.status(404).send({message: 'User not found.'});
    }
  } catch (err) {
    res.status(500).send({message: 'An error occurred retrieving category.'});
  }
}

