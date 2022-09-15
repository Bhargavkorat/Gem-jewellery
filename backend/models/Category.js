const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Category = mongoose.model("Category", CategorySchema, "category")

module.exports = Category;