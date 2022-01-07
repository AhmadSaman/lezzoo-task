import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../axios";

//action creator
export const getProducts = createAsyncThunk(
  "productsStore/fetchingProducts",
  (storeId, categoryId) => {
    return http
      .get(`/stores/${storeId}/categories/${categoryId}/products`)
      .then((response) => response.data);
  }
);

export const createProduct = createAsyncThunk(
  "productsStore/creatingProduct",
  (storeId, categoryId, product) => {
    return http
      .post(`/stores/${storeId}/categories/${categoryId}/products`, product)
      .then((response) => response.data);
  }
);

const productsSlice = createSlice({
  name: "storesReducer",
  initialState: {
    products: [],
    loading: true,
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [getProducts.pending](state) {
      state.loading = true;
    },
    [getProducts.fulfilled](state, action) {
      const { data } = action.payload;
      state.products = data;
      state.loading = false;
    },
  },
});
export default productsSlice.reducer;
