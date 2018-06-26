const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('validator');


const productSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    code: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    title: {
        type: String,
        required: 'Please supply a title',
        trim: true
    },
    price: {
        type: Number,
        required: 'Please supply a price'
    },
    category: {
        type: String
    },
    description: {
        type: String    
    },    
    image: {
        type: String
    }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

module.exports = mongoose.model('Product', productSchema);
