import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
            const existingProductIndex = state.findIndex(item => item.product.id === product.id);

             if (existingProductIndex !== -1) { 
                state[existingProductIndex].quantity += quantity;
            } else {
            state.push( {product, quantity })

            }
            localStorage.setItem('cart', JSON.stringify(state));
             
            
        },
        removeFromCart: (state,action) => {
             const productIdToRemove = action.payload;
             const updatedCart = state.filter(item => item.product.id !== productIdToRemove);
             localStorage.setItem('cart', JSON.stringify(updatedCart));
             return updatedCart;
        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
export const cartReducer = cartSlice.reducer