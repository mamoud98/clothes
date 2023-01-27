import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import routes from "./routes";
import UserProvider from "./contexts/user.context";
import CategoriesProvider from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
