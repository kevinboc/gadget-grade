const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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
    body: {
        type: String,
        required: true,
        maxlength: 250
    },
    timeStamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: true,
        validate: {
            validator: async function (value) {
                const review = await mongoose.model('Review').findById(value);
                return review !== null;
            },
            message: 'Invalid review'
        }
    }
});

module.exports = mongoose.model('Comment', commentSchema);