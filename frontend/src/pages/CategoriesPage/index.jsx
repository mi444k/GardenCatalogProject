import React from 'react';
import s from './style.module.css';
import { CategoriesContainer } from '../../components/CategoriesContainer';

export const CategoriesPage = () => {
  return (
    <div className={s.wrapper}>
      <h1>Categories</h1>
      <CategoriesContainer />
    </div>
  );
};
