const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    categories: {
        type: [String],
        validate: {
            validator: function (arr) {
                return arr.length >= 1 && arr.length <= 10;
            },
            message: 'Categories must have between 1 and 10 items'
        }
    },
    ratingCount: {
        type: Number,
        default: 0,
        min: 0
    },
    reviewCount: {
        type: Number,
        default: 0,
        min: 0
    },
    image: {
        type: String,
        default: function () {
            return this._id.toString()
        }
    }
});

productSchema.index({name: 'text'});
module.exports = mongoose.model('Product', productSchema);