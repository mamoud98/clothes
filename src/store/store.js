// import {
//   applyMiddleware,
//   compose,
//   legacy_createStore as createStore,
// } from "redux";

import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
// export const persistor = persistStore(store);
