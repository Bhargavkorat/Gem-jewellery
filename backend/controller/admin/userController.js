const Users = require("../../models/User")

module.exports.userinfo = async (req,res) =>{
    try {
        const users = await Users.find({})
        res.render("manageuser",{
            data : users
        })
    } catch (error) {
        
    }
}