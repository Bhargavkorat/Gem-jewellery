const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Subcategory = mongoose.model("Subcategory", SubCategorySchema, "subcategory")

module.exports = Subcategory;
