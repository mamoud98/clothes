import React from "react";

import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.jsx";
import { DirectoryContainer } from "./directory.styles.jsx";
import { categories } from "./utils";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
