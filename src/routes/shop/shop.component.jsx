import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchCategoriesStartAsync } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);
  return <Outlet />;
}

export default Shop;
