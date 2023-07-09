import React from "react";
import { Base } from "./Base/Base.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import homeReducer from "./features/HomeSlice.js";
import ProductReducer from './features/AddProduct.js';
// import "./App.css";

const store = configureStore({
  reducer: {
    homeSlice: homeReducer,
    addProduct: ProductReducer,
  },
});

function App() {
  return (
    <div>
      <Provider store={store}>
        <Base />
      </Provider>
    </div>
  );
}

export default App;
