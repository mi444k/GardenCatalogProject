import React from 'react';
import s from './style.module.css';
import { CategoryItem } from '../CategoryItem';
import { useStore } from '../../../store';
import randomizeArray from '../../../utils/randomizeArray';

export const CategoriesContainer = ({ limit = 0, random = false }) => {
  let { categories } = useStore();

  if (random === true) {
    categories = randomizeArray(categories);
  }
  if (limit > 0) {
    categories = categories.slice(0, limit);
  }
  return (
    <div className={s.wrapper}>
      {categories.map((elem) => (
        <CategoryItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};
