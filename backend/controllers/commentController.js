var mongoose = require('mongoose'),
Comment = mongoose.model('Comment');
var ObjectID = require('mongodb').ObjectID;

exports.addComment = async function(req, res) {
    var newComment = new Comment(req.body);
    try {
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (err) {
      res.status(500).send({message: 'An error occurred while adding the comment.'});
    }
};
  
exports.getReviewComments = async function(req, res) {
    try {
        const comments = await Comment.find({review: req.params.reviewId})
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).send({message: 'An error occurred while getting the review comments.'});
    }
}

exports.getUserComments = async function(req, res) {
    try {
        const comments = await Comment.find({author: req.params.userId})
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).send({message: 'An error occurred while getting the user comments.'});
    }
}

exports.getComment = async function(req, res) {
    try {
      const comment = await Comment.findById(req.params._id);
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).send({message: 'Comment not found.'});
      }
    } catch (err) {
      res.status(500).send({message: 'An error occurred retrieving comment.'});
    }
  }
  
  
  exports.updateComment = async function(req, res) {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params._id, req.body, {new:true});
        res.status(200).json(updatedComment);
    } catch (err) {
      res.status(500).send({message: 'An error occurred updating comment.'});
    }  
  }
  