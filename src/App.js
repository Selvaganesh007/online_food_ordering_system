import React from "react";
import { Base } from "./Base/Base.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import dropdownReducer from "./features/Dropdownprop.js";
import themeReducer from "./features/Radioprop.js";
import CartReducer from "./features/Addcartprop.js";
import signinUserReducer from "./features/SignInUser.js";
// import "./App.css";

const store = configureStore({
  reducer: {
    dropDown: dropdownReducer,
    radio: themeReducer,
    addCart: CartReducer,
    signinUser: signinUserReducer,
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
