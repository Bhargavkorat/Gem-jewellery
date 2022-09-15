const express = require('express')
const routes = express.Router()
const passport = require('passport');
const { checkAdmin,checklogin } = require('../middleware/checkLogin')
const productController = require("../controller/admin/productController")
const logincontroller = require("../controller/admin/loginController")
const dashbordcontroller = require("../controller/admin/dashbordcontroller")
const categoryController = require("../controller/admin/categoryController")
const userController = require("../controller/admin/userController")
const orderController = require("../controller/admin/orderController")
const contactusController = require("../controller/admin/contactusController")
require("../middleware/localStretagy");
const upload = require("../middleware/singleimg")

const session = require('express-session')

routes.use(session({
    name: "admin",
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY_ADMIN,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))
routes.use(passport.initialize())
routes.use(passport.session())

routes.get("/Login", checkAdmin, logincontroller.loginadmin)
routes.post('/logindata', passport.authenticate('local', { failureRedirect: "/admin/Login" }), logincontroller.loginadminpass)
routes.get("/Dashboard",checklogin, dashbordcontroller.dashboard)
routes.get("/logout", logincontroller.logout)

routes.get("/addproducts",checklogin,productController.addproducts)
routes.post("/addproduct",upload.single("img"),productController.addproduct)
routes.get("/manageproduct",productController.displayproduct)
routes.get("/deleteproduct/:id", productController.deleleproducts)
routes.get("/changeCategory/:name",productController.changecategory)

routes.get("/managecategory",checklogin,categoryController.category)
routes.post("/addcategory",categoryController.addcategory)
routes.get("/Managecategory/:id",categoryController.deletecategory)

routes.get("/managesubcategory",checklogin,categoryController.subcategory)
routes.post("/addsubcategory",categoryController.addsubcategory)
routes.get("/Managesubcategory/:id",checklogin,categoryController.deletesubcategory)

routes.get("/Manageuser",checklogin,userController.userinfo)
routes.get("/manageorder",orderController.displayorder)

routes.get("/managecontactus",contactusController.contacts)
routes.get("/Managecontact/:id",contactusController.deletecontacts)

// routes.get("/Managecontact/:id",contactusController.deletecontacts)

module.exports = routes;