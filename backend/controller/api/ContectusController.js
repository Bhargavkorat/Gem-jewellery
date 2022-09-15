const Orders = require("../../models/Order");
const ContactUs = require("../../models/ContactUs");
const { name } = require("ejs");


module.exports.contactUs = async (req, res) => {
    const { name, mobile, email, message } = req.body
    if (!name || !mobile || !email || !message)
        res.status(422).json({ error: "Something is Empty" });

    try {
        const contacts = new ContactUs({ name, mobile, email, message })
        await contacts.save();
        res.status(201).json({ message: "Message send Successfully" });
    } catch (error) {
        res.json(error.message)
    }
}

