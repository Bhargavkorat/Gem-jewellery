import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
})
export const loginuser =() => api.get("/api")
export const Registeruser = (data) => api.post("/api/register", data)
export const login = (data)=> api.post("/api/login",data)
export const logout = (data)=> api.post("/api/logout",data)
export const product = ()=> api.get("/api/produts")
export const productsdata = (subcategory)=> api.get(`/api/productdata/${subcategory}`)
export const oneproduct = (id) => api.get(`/api/singleproduct/${id}`)
export const addtofav = (id, data) => api.post(`/api/addtofav/${id}`, data)
export const fetchcart = ()=> api.get("/api/fetchcart")
export const deletecart = (id) => api.post(`/api/deletecart/${id}`)
export const wishlists = (id, data) => api.post(`/api/wishlist/${id}`, data)
export const fetchwishlistes = ()=> api.get("/api/fetchwishlist")
export const deletewishlists = (id) => api.post(`/api/deletewishlist/${id}`)
export const orders = (data)=> api.post("/api/orders",data)
export const onlinebillpayment = (data)=> api.post("/api/razorpay",data)
export const payments = (data) => api.post(`/api/payments`,data)
export const contactmessage = (data) => api.post(`/api/contactus`,data)
export const displayorder = ()=> api.get("/api/orderdetails")
export const categories =() => api.get("/api/categories")