const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    like: {
        type: Number,
        default: 0,
        required: true
    },
    dislike: {
        type: Number,
        default: 0,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);