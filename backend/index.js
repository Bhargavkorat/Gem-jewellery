require('dotenv').config()
require("./config/db")
const express = require('express')
const app = express()   
const routes = require('./routes')
var cookie = require("cookie-parser")
var flash = require('connect-flash')
const cors = require("cors")
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }))
const stripe = require("stripe")("sk_test_51KnyReSDCz2BE6zECkWhM8Zwe3KxmRBzQ4rSNJxuyUiKjCNuIjremlODcoH1vKKJKjw8FFjGASQPTGwU2IHchXvP00Em2Du1xw")
const  uuid = require("uuid");

app.use(flash())
app.use(cookie())
app.set('view engine', 'ejs')
app.use(express.static('./'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`port is listening on  `);
})