import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { useParams } from 'react-router-dom';
import { useStore } from '../../store';
import { ProductsContainer } from '../../components/Products/ProductsContainer';

export const ProductsPage = ({ filters }) => {
  const { categories } = useStore();
  const { cid } = useParams();
  const [title, setTitle] = useState();

  useEffect(() => {
    if (filters?.all) {
      setTitle('All products');
    } else if (filters?.category) {
      const cat = categories.find((e) => e.id === +cid);
      if (cat) {
        setTitle(cat.title);
      } else {
        setTitle();
      }
    } else if (filters?.discounted) {
      setTitle('Sale');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, filters]);

  return (
    <div className={s.wrapper}>
      <h1>{title ? title : 'Category not found...'}</h1>
      {title ? <ProductsContainer key={title} initFiltersState={filters} /> : <></>}
    </div>
  );
};
