import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cart from "./pages/Cart";
import { Homee } from "./pages/Homee.js";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Favourite } from "./pages/Favourite.js";
import { Login } from "./pages/Login.js";
import { Register } from "./pages/Register.js";
import { store } from "./redux/index.js";
import { Provider } from "react-redux";
import Menu from "./pages/Menu";
import { NewProduct } from "./pages/NewProduct.js";
import { Guest } from "./pages/Guest.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homee />} />
      <Route path="cart" element={<Cart />} />
      <Route path="favourite" element={<Favourite />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="newProduct" element={<NewProduct />} />
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="guest" element={<Guest/>} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
