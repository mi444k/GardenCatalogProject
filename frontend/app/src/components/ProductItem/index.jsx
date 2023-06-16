import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
import { PriceBlock } from '../PriceBlock';
import { useStore } from '../../store';

export const ProductItem = ({ id, title, price, discont_price, image }) => {
  const { addToCart } = useStore();
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(id);
  };
  return (
    <NavLink to={`/product/${id}`} className={s.wrapper}>
      <div className={s.image_block}>
        <img className={s.image} src={`http://localhost:3333/${image}`} alt={title} />
        <div className={s.add_cart_btn} onClick={handleAddToCart}>
          Add to cart
        </div>
      </div>
      <PriceBlock {...{ price, discont_price }} />
      <span className={s.title}>{title}</span>
    </NavLink>
  );
};
