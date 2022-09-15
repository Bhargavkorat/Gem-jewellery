const ContactUs = require("../../models/ContactUs");

module.exports.contacts = async (req, res) => {
    try {
        const contacts = await ContactUs.find({})
        res.render('managecontactus',{
            contactus :contacts,
            message: req.flash('message')
        });
    } catch (error) {
        res.json(error.message)
    }
}

module.exports.deletecontacts = async (req, res) => {
    try {
        await ContactUs.findByIdAndDelete(req.params.id)
        req.flash('message', 'Message deleted successfully!')
        res.redirect("back")
    } catch (error) {
        res.send(error.message)
    }
}