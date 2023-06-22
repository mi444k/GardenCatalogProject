import React from 'react';
import s from './style.module.css';
import { CategoriesContainer } from '../../components/Categories/CategoriesContainer';

export const CategoriesPage = () => {
  return (
    <div className={s.wrapper}>
      <h1>Categories</h1>
      <CategoriesContainer />
    </div>
  );
};
