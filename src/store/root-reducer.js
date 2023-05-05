import { combineReducers } from "redux";
import { userReduser } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { CartReduser } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReduser,
  categories: categoriesReducer,
  cart: CartReduser,
});
