import React, { FC } from "react";
import styles from "./CategoryTab.module.scss";
import { setActiveCategory } from "../../../../store/categories/categories.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { CategoriesName } from "../../../../store/categories/categories.type";

type CategoryTabProps = {
  text: string;
  categoryName: CategoriesName;
};

const CategoryTab: FC<CategoryTabProps> = ({ text, categoryName }) => {
  const dispatch = useAppDispatch();
  // state는 redux store에 있는 state를 모두 불러와서 state.categoriesSlice 값이 필요하니 그 값만 가져옴.
  const category = useAppSelector((state) => state.categoriesSlice);

  const getActiveCategory = () => {
    // category를 클릭하면 클릭한 categoryName으로 state 변경시킴
    dispatch(setActiveCategory(categoryName));
  };

  return (
    <button
      className={
        categoryName === category
          ? styles.active_category
          : styles.category_button
      }
      onClick={getActiveCategory}
    >
      {text}
    </button>
  );
};

export default CategoryTab;
