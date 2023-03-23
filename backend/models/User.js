const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userID: {
        type: ObjectId,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);