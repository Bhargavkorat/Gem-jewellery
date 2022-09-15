const Addtocart = require("../../models/AddToCart")
const Orders = require("../../models/Order")


module.exports.orders = async (req, res) => {
    const { uid, pid, cartid, totalamount, amount, PaymentType, Paymentstatus } = req.body
    if (!uid || !pid) {
        res.status(422).json({ error: "Something is Empty" });
    }
    try {
        const orders = new Orders({ uid, pid, totalamount, amount, PaymentType, Paymentstatus })
        await orders.save();
        const cart = await Addtocart.findByIdAndDelete(cartid)
        res.status(201).json({ message: "Order Placed Successfully" });
    } catch (error) {
        res.json(error.message)
    }
}
module.exports.displayorder = async (req, res) => {
    try {
        const id = req.user
        const displayorder = await Orders.find({ uid: req.user }).populate('uid').populate({
            path: 'pid', populate: { path: 'price' }
        })
        if (displayorder) {
            res.json({ message: "Item get Successfully", cartdata: displayorder })
        }
        else {
            res.json("No item found in cart")
        }
    } catch (error) {
        return res.json(error.message)
    }
}
