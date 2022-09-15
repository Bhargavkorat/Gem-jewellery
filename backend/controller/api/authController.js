const User = require("../../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');


module.exports.registeruser = async(req,res)=>{
    const { firstname, lastname, email, address, pincode, password, confirmpassword, mobile } = req.body

    if (!firstname ||!lastname || !email ||!address ||!pincode || !password || !confirmpassword|| !mobile) {
        return res.status(422).json({ error: "Something is Empty" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email Already Exist" })
        }
        else{
            if (password !== confirmpassword) {
                return res.json("password not match")
            } else {
                const user = new User({ firstname, lastname,address,pincode, email, password, mobile })
                const token = await user.generateAuthToken();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 20000000000),
                    httpOnly: true
                });
                await user.save();
                return res.status(201).json({ message: "User Registered Successfully" });
            }
        }      
    } catch (error) {
        return res.json(error.message)
    }
}
module.exports.loginuser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({ error: "Please Fill Data" })
        }
        else {
            const availableuser = await User.findOne({ email: email })
            const isMatch = await bcrypt.compare(password, availableuser.password);
            if (!availableuser) {
                res.status(400).json({ message: "Something went wrong",success:0 });
            }
            else {
                if (isMatch) {
                    const token = await availableuser.generateAuthToken();
                    const user = User.find({ email: email }, { token: token })
                    res.cookie("jwt", token, {
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                        httpOnly: true
                    });
                    res.status(200).json({ message: "User login Successfully", user: availableuser , success: 1});
                }
                else {
                    res.status(400).json({ message: "Password is Wrong",success:0})
                }
            }
        }
        next()
    } catch (error) {
        res.json(error.message)
    }
}

module.exports.userdata =async (req, res) => {
    try {
        const id = req.user.id;
        const user = await User.findOne({ id: req.params.id })
        return res.status(200).json(user)
    } catch (error) {
        res.json(error)
    }
}

module.exports.logout = async (req, res) => {
    try {
        req.user.token = null;
        res.clearCookie("jwt");
        await req.user.save();  
        res.json("User Logout Successfully")
    } catch (error) {
        res.json(error.message)
    }
}