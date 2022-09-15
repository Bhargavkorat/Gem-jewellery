const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MainAdminSchema = new Schema({
    name:{
        type:String,
        required:true
    } ,
    email : {
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }
})


const MainAdmin = mongoose.model("MainAdmin", MainAdminSchema, "mainadmin")

module.exports = MainAdmin;