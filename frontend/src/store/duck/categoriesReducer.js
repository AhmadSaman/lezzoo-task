import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../axios";

//action creator
export const getCategories = createAsyncThunk(
  "CategoriesStore/fetchingCategories",
  (id) => {
    return http
      .get(`/stores/${id}/categories`)
      .then((response) => response.data);
  }
);

export const createCategory = createAsyncThunk(
  "CategoriesStore/creatingCategory",
  (id, category) => {
    return http
      .post(`/stores/${id}/categories`, category)
      .then((response) => response.data);
  }
);

const categoriesSlice = createSlice({
  name: "categoriesReducer",
  initialState: {
    categories: [],
    loading: true,
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [getCategories.pending](state) {
      state.loading = true;
    },
    [getCategories.fulfilled](state, action) {
      const { data } = action.payload;
      state.allStores = data;
      state.loading = false;
    },
  },
});
export default categoriesSlice.reducer;
