const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productid: {
        type: String,
        required: true
    },   
    productname: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },      
    subcategory: {
        type: String,
        required: true
    },                                    
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    img: {
        type: String,
        required: true
    },
    unable: {
        type: Boolean,
        required: true,
        default: false
    },
    review: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String
        },
        title: {
            type: String
        },
        Opinion: {
            type: String
        },
        rate: {
            type: Number
        },
    }
    ],

}, { timestamps: true })

const Product = mongoose.model("Product", productSchema, "product")

module.exports = Product;
