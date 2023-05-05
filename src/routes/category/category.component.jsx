import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState();
  const categoriesMap = useSelector(selectCategoriesMap);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
