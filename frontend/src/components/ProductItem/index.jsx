import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
import { PriceBlock } from '../PriceBlock';

export const ProductItem = ({ id, title, price, discont_price, image }) => {
  return (
    <NavLink to={`/product/${id}`} className={s.wrapper}>
      <img className={s.image} src={`http://localhost:3333/${image}`} alt={title} />
      <PriceBlock {...{ price, discont_price }} />
      <span className={s.title}>{title}</span>
    </NavLink>
  );
};
