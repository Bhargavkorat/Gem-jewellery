const Product = require("../../models/Product")
const Subcategory = require("../../models/Subcategory")


module.exports.categories = async (req,res) =>{
    try {
        const category = await Subcategory.find({})
        res.json({ category })
    } catch (error) {
        res.json(error.message)        
    }
}