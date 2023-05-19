const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async function (value) {
                const user = await mongoose.model('User').findById(value);
                return user !== null;
            },
            message: 'Invalid author'
        }
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
        maxlength: 500
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
    },
    usersLiked: {
        type: [String],
        default: [],
    },
    usersDisliked: {
        type: [String],
        default: [],
    }
        
});

module.exports = mongoose.model('Review', reviewSchema);