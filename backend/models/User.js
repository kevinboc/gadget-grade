const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                const emailRegex = /^\S+@\S+\.\S+$/;
                return emailRegex.test(email);
            },
            message: 'Invalid email format'
        }
    },
    active: {
        type: Boolean,
        default: false
    },
    reviews: {
        type: Number,
        default: 0,
        min: 0
    },
    description: {
        type: String,
        default: '',
        maxlength: 250
    },
    timeStamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    location: {
        type: String,
        default: 'Earth'
    },
    image: {
        type: String,
        default: "default"
    }
});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            this.password = await bcrypt.hash(this.password, salt);
        } catch (err) {
            return next(err);
        }
    }
    next();
});

module.exports = mongoose.model('User', userSchema);