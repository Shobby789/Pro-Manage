import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/apiSlice/ApiSlice.js";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import store from "./redux/store.js";
// import { Pokemon } from "./features/Pokemon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
