import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../axios";

//action creator
export const getStores = createAsyncThunk("storesStore/fetchingStores", () => {
  return http.get("/stores").then((response) => response.data);
});
export const getStore = createAsyncThunk("storesStore/fetchingStore", (id) => {
  return http.get(`/stores/${id}`).then((response) => response.data);
});
export const createStore = createAsyncThunk(
  "storesStore/creatingStore",
  (store) => {
    return http.post(`/stores/`, store).then((response) => response.data);
  }
);

const storesSlice = createSlice({
  name: "storesReducer",
  initialState: {
    allStores: [],
    loading: true,
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [getStores.pending](state) {
      state.loading = true;
    },
    [getStores.fulfilled](state, action) {
      const { data } = action.payload;
      state.allStores = data;
      state.loading = false;
    },
    [getStore.pending](state) {
      state.loading = true;
    },
    [getStore.fulfilled](state, action) {
      const { data } = action.payload;
      state.store = data;
      state.loading = false;
    },
  },
});
export default storesSlice.reducer;
