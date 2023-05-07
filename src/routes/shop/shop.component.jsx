import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.reducer";

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
