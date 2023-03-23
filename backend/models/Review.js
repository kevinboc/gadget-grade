const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    reviewID: {
        type: ObjectId,
        required: true
    },
    productID: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        timestamps: true,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        required: true
    },
    dislike: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);