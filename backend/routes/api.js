const express = require('express')
const jwt = require("jsonwebtoken")
const routes = express.Router()
const authcontroller = require("../controller/api/authController")
const productController = require("../controller/api/productController")
const addtocartController = require("../controller/api/addtocartController")
const orderController = require("../controller/api/orderConteroller")
const paymentController = require("../controller/api/paymentController")
const contactusController = require("../controller/api/ContectusController")
const categoryController = require("../controller/api/categorycontroller")

const userAuth = require("../middleware/userAuth")
const { Router } = require('express')

routes.get("/",userAuth,authcontroller.userdata)
routes.post("/register", authcontroller.registeruser)
routes.post("/login",authcontroller.loginuser)
routes.post("/logout", userAuth, authcontroller.logout)
routes.get("/produts",productController.products)
routes.get("/productdata/:subcategory",productController.productsdata)
routes.get("/singleproduct/:id",productController.singleproduct)
// routes.post("/addtocart/:id", userAuth, addtocartController.cart)
routes.post("/addtofav/:id", userAuth, addtocartController.addfav)
routes.get("/fetchcart", userAuth, addtocartController.fetchcart)
routes.post("/deletecart/:id", userAuth,addtocartController.deletecartitem)

routes.post("/orders", userAuth, orderController.orders)
routes.post("/contactus",contactusController.contactUs)
routes.post("/wishlist/:id", userAuth, addtocartController.wishlists)
routes.get("/fetchwishlist", userAuth, addtocartController.fetchwishlist)
routes.post("/deletewishlist/:id", userAuth,addtocartController.deletewishlist)

routes.get("/orderdetails",userAuth,orderController.displayorder)
routes.get("/categories",categoryController.categories)




module.exports = routes;