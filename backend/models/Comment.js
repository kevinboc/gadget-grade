const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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
    review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema);