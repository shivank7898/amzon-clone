import {configureStore } from "@reduxjs/toolkit"
import thunk from 'redux-thunk';
import productsReducer from '../redux/slice/products.js'; 
import { nameReducer } from "../redux/slice/nameSlice.js";
import productdetails, { productDetailsReducer } from "../redux/slice/productdetails.js";

export const store = configureStore({
    reducer: {
        name : nameReducer,
        products: productsReducer,
        productdetails: productDetailsReducer,
    },
    middleware: [thunk],
     
})

export default store