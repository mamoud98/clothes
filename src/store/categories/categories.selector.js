import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
