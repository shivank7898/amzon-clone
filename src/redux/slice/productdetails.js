import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductDetails = createAsyncThunk(
  'productDetails/fetchProductDetails',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: { 
    data: null, 
    loading: 'idle',
    error: null 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

export default productDetailsSlice.reducer;
export const productDetailsReducer = productDetailsSlice.reducer;
    