import { combineReducers } from "@reduxjs/toolkit";
import { userReduser } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { CartReduser } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReduser,
  categories: categoriesReducer,
  cart: CartReduser,
});
