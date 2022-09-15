const Order = require("../../models/Order")

module.exports.displayorder = async (req, res) => {
    try {
        const orderes = await Order.find({}).populate('uid').populate({
            path: 'pid', populate: { path: 'price' }
        })
        res.render("manageorder", {
            order: orderes
        })
    } catch (error) {
        return res.json(error.message)
    }
}

module.exports.status = async (req, res) => {
    try {
        const order = await Order.findById({ $and: [{ pending: { $eq: true } }, { process: { $eq: false } }] })
        if (order[0].pending === true && order[0].process === false) {
            const status = await Order.findByIdAndUpdate({
                pending: false,
                process: true
            })
        }
    } catch (error) {
        return res.json(error.message)
    }
}

