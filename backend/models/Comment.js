const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    reviewID: {
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
    }
});

module.exports = mongoose.model('Comment', commentSchema);