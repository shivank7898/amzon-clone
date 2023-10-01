import {configureStore, createReducer } from "@reduxjs/toolkit"
import thunk from 'redux-thunk';
import productsReducer from '../redux/slice/products.js'; 
import { nameReducer } from "../redux/slice/nameSlice.js";
import { productDetailsReducer } from "../redux/slice/productdetails.js";
import {  cartReducer } from "../redux/slice/cartSlice.js";

const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
export const selectCartCount = state => {
  return state.cart.reduce((totalCount, item) => totalCount + item.quantity, 0);
};
export const store = configureStore({
 

    reducer: {
        name : nameReducer,
        products: productsReducer,
        productdetails: productDetailsReducer,
        cart:cartReducer,
    },
    middleware: [thunk],
    preloadedState: {
    cart: savedCart,  
  },
})

export default store