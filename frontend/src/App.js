import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createCategory, getCategories } from "./store/duck/categoriesReducer";
// import { createStore } from "./store/duck/storesReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createCategory(1, { name: "haaaaaaaaa" }));
  }, []);
  return <div className="App">hey</div>;
}

export default App;
