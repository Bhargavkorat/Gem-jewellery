const Product = require("../../models/Product")
const Category = require("../../models/Category")
const SubCategory = require("../../models/Subcategory")
const flash = require('connect-flash');


module.exports.addproducts = async (req,res)=>{
    try {
        let categorys = await Category.find({})
        let subcategorys = await SubCategory.find({category:categorys[0].category})
        // let subcategorys = await SubCategory.find({})
        res.render("Addproduct",{
            category :categorys,
            subcategory :subcategorys,
            message: req.flash('message')
        })
    } catch (error) {
        return res.json(error.message)
    }
}


module.exports.addproduct = async (req, res) => {
    const {productid,productname, category, subcategory, price, description } = req.body
    const img = req.file.path
    if (!productid ||!productname|| !category || !subcategory|| !price || !description || !img) {
        res.status(422).json({ error: "Something is Empty" });
    }
    try {
        const products = await new Product({productid,productname, category, subcategory, price, description, img })
        await products.save();
        req.flash('message', 'Product Add Successfully!')
        res.redirect("back")

    } catch (error) {
        return res.json(error.message)
    }
}

module.exports.displayproduct = async (req,res)=>{
    try {
        let products = await Product.find({})
        res.render("manageproduct",{
            product:products,
            message: req.flash('message')
        })
    } catch (error) {
        return res.json(error.message)
    }
}
module.exports.deleleproducts = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, {
            block: true
        })
        req.flash('message', 'Product delete successfully!')
        res.redirect("back")
    } catch (error) {
        res.send(error.message)
    }
}
module.exports.changecategory = async (req,res,next) => {
    const {name} = req.params
    try {
        const data = await SubCategory.find({category:name})
        console.log(data)
        return res.json(data)
    } catch (err) {
        return res.json({err:err.message})
    }
}