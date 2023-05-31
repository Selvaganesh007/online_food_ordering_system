import React from "react";
import { Base } from "./Base/Base.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import dropdownReducer from "./features/Dropdownprop.js";
// import "./App.css";

const store = configureStore({
  reducer: {
    dropDown: dropdownReducer,
  },
});

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <Base />
        </Provider>
      </div>
    </>
  );
}

export default App;
