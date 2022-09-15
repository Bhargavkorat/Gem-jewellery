const Category = require("../../models/Category");
const Orders = require("../../models/Order");
const Product = require("../../models/Product");
const Subcategory = require("../../models/Subcategory");
const User = require("../../models/User");


module.exports.dashboard = async (req, res) => {
    try {
        const users = await User.find({})
        const products = await Product.find({})
        const orders = await Orders.find({})
        const categories = await Category.find({})
        const subcategory = await Subcategory.find({})
        
        let totalCollection =0 
                
        orders.map(data =>{
            totalCollection = totalCollection + data.totalamount
        })
        
        res.render('Dashboard',{
            user :users,
            orders : orders,
            Category :categories,
            products :products,
            subcategory :subcategory,
            totalCollections: totalCollection
        });
    } catch (error) {
        res.json(error.message)
    }
}