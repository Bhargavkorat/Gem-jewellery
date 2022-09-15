const Category = require("../../models/Category")
const SubCategory = require("../../models/Subcategory")


module.exports.category = async (req, res) => {
    try {
        let categorys = await Category.find({})
        res.render('managecategory',{
            category : categorys,
            message: req.flash('message')
        });
    } catch (error) {
        res.json(error.message)
    }
}

module.exports.addcategory = async (req, res) => {

    const { category } = req.body
    if (!category) {
        res.status(422).json({ error: "Something is Empty" });
    }
    try {
        const categorys = new Category({ category })
        await categorys.save();
        req.flash('message', 'New Category Inserted Successfully!')
        res.redirect("back")
    } catch (error) {
        res.json(error.message)
    }
}
module.exports.deletecategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id)
        req.flash('message', 'Category deleted successfully!')
        res.redirect("back")
    } catch (error) {
        res.send(error.message)
    }
}
module.exports.subcategory = async (req, res) => {
    try {
        const categories = await Category.find({})
        const subcategories = await SubCategory.find({})

        res.render('managesubcategory',{
            category : categories,
            subcategory:subcategories,
            message: req.flash('message')
        });
    } catch (error) {
        res.json(error.message)
    }
}

module.exports.addsubcategory = async (req, res) => {

    const { category ,subcategory} = req.body
    if (!category || !subcategory) {
        res.status(422).json({ error: "Something is Empty" });
    }
    try {

        const subcategorys = new SubCategory({ category ,subcategory })
        await subcategorys.save();
        req.flash('message', 'New Category Inserted Successfully!')
        res.redirect("back")
    } catch (error) {
        res.json(error.message)
    }
}
module.exports.deletesubcategory = async (req, res) => {
    try {
        await SubCategory.findByIdAndDelete(req.params.id)
        req.flash('message', 'Subcategory deleted successfully!')
        res.redirect("back")
    } catch (error) {
        res.send(error.message)
    }
}