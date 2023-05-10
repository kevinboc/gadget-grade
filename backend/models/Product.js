const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productID: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ratingCount: {
        type: Number,
        required: true
    },
    reviewCount: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        required: true
    }
});

productSchema.index({name: 'text'});
module.exports = mongoose.model('Product', productSchema);