const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    categories: [{
        type: String
    }],
    ratingCount: {
        type: Number,
        default: 0
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    }
});

productSchema.index({name: 'text'});
module.exports = mongoose.model('Product', productSchema);