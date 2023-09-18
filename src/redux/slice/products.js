import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');  
    return response.data;
  } catch (error) {
    throw error;
  }
});





const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    data: null,
    isError: false, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isError =true
        console.log("Error", action.payload)
      }); 
  },
});





export default productsSlice.reducer
export const productReducer = productsSlice.reducer