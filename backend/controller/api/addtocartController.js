const AddToCart = require("../../models/AddToCart")
const User = require("../../models/User")
const wishlists = require("../../models/wishlist")
const wishlish = require("../../models/wishlist")

module.exports.addfav = async (req, res) => {
    try {
        const pid = req.params.id
        const addtocart = await AddToCart.find({ userId })
        const filterData = addtocart.filter((data) => {
            return data.product == pid
        })
        if (!filterData[0]) {
            const cart = new AddToCart({ userId, product: pid })
            await cart.save()
            res.json("Created Successfully")
        }
        else {
            res.json("already exists")
        }
    }
    catch (error) {
        res.json(error.message)
    }
}
module.exports.fetchcart = async (req, res) => {
    try {
        const cartitem = await AddToCart.find({ userId: req.user.id }).populate('userId').populate({ path: 'product' })
        // console.log(cartitem)
        if (cartitem) {
            res.json({ message: "Item get Successfully", cartdata: cartitem })
        }
        else {
            res.json("No item found in cart")
        }
    } catch (error) {
        res.json(error.message)
    }
}
module.exports.deletecartitem = async (req, res) => {
    try {
        const params = req.params.id
        const remove = await AddToCart.findByIdAndDelete(params)
        const data = await AddToCart.find({ userId: remove.userId }).populate('userId').populate({ path: 'product' })
        return res.json({ msg: "Remove successfully", data })
    } catch (error) {
        return res.json(error.message)
    }
}
module.exports.wishlists = async (req, res) => {
    try {
        const pid = req.params.id
        const userId = req.user.id
        const addtocart = await wishlish.find({ userId })
        const filterData = addtocart.filter((data) => {
            return data.product == pid
        })
        if (!filterData[0]) {
            const cart = new wishlish({ userId, product: pid })
            await cart.save()
            res.json("Created Successfully")
        }
        else {
            res.json("already exists")
        }
    }
    catch (error) {
        res.json(error.message)
    }
}
module.exports.fetchwishlist = async (req, res) => {
    try {
        const cartitem = await wishlists.find({ userId: req.user.id }).populate('userId').populate({ path: 'product' })
        if (cartitem) {
            res.json({ message: "Item get Successfully", cartdata: cartitem })
        }
        else {
            res.json("No item found in cart")
        }
    } catch (error) {
        res.json(error.message)
    }
}
module.exports.deletewishlist = async (req, res) => {
    try {
        const params = req.params.id
        const remove = await wishlists.findByIdAndDelete(params)
        const data = await wishlists.find({ userId: remove.userId }).populate('userId').populate({ path: 'product' })
        return res.json({ msg: "Remove successfully", data })
    } catch (error) {
        return res.json(error.message)
    }
}