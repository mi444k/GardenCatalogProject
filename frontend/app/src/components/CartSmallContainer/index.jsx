import React from 'react';
import s from './style.module.css';
import { useStore } from '../../store';
import { NavLink } from 'react-router-dom';
import { CartSmallItem } from './CartSmallItem';

export const CartSmallContainer = () => {
  const { cart } = useStore();
  return (
    <div className={s.wrapper}>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartSmallItem key={item.id} {...item} />
          ))}
            <NavLink className={s.goto_cart_btn} to="/cart">Go to cart...</NavLink>
        </>
      ) : (
        <div>Cart is empty...</div>
      )}
    </div>
  );
};
