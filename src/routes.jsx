import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Authentication from "./routes/authentication/authentication.componet";
import Category from "./routes/category/category.component";
import Checkout from "./routes/checkout/checkout.component";
import Error from "./routes/error/error.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:category", element: <Category /> },
      { path: "sign-in", element: <Authentication /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);
export default routes;
