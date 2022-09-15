const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addtocartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
}, { timestamps: true })

const AddToCart = mongoose.model("Addtocart", addtocartSchema, "addtocart")

module.exports = AddToCart;
