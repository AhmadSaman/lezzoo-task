import { configureStore } from "@reduxjs/toolkit";
import storesSlice from "./duck/storesReducer";
import categoriesSlice from "./duck/categoriesReducer";
import productsSlice from "./duck/productReducer";
const store = configureStore({
  reducer: {
    storesStore: storesSlice,
    categoriesStore: categoriesSlice,
    productsStore: productsSlice,
  },
});

export default store;
