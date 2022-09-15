const Product = require("../../models/Product")


module.exports.products = async (req, res) => {
    try {
        const fetchproducts = await Product.find({});
        res.json(fetchproducts)
    } catch (error) {
        res.json(error.message)
    }
}
module.exports.productsdata = async (req, res) => {
    try {
        const paramsid = req.params.subcategory
        if (paramsid) {
            const product = await Product.find({ subcategory: req.params.subcategory })
            res.json({ productinfo: product })
        }
        else {
            res.json("No product found")
        }
    } catch (error) {
        res.json(error.message)
    }
}
module.exports.singleproduct = async (req, res) => {
    try {
        const paramsid = req.params.id
        if (paramsid) {
            const product = await Product.findOne({ _id: req.params.id })
            res.json({ productinfo: product })
        }
        else {
            res.json("No product found")
        }
    } catch (error) {
        res.json(error.message)
    }
}
