import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const category = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(category));
    };
    getCategories();
  }, [dispatch]);
  return <Outlet />;
}

export default Shop;
