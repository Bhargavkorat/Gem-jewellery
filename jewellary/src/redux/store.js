import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice"
import userReducer from "./userloginSlice/userSlice"

const store = configureStore({
    reducer:{
        cart: cartReducer,
        userinfo: userReducer,
    }
})

export default store;
