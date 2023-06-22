import React from 'react';
import logo from '../../../static/images/logo.png';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';
import { BsHandbag, BsHandbagFill } from 'react-icons/bs';
import { useStore } from '../../../store';

export const Header = () => {
  const { cart } = useStore();
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <NavLink to="/">
          <img src={logo} className={s.logo_image} alt="Garden logo" />
        </NavLink>
        <NavLink to="/categories" className={s.logo_title}>
          Catalog
        </NavLink>
      </div>
      <nav>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/products">All products</NavLink>
        <NavLink to="/sales">All sales</NavLink>
      </nav>
      <div className={s.cart} id="cart_icon">
        <NavLink to="/cart">
          {cart.length > 0 ? <BsHandbagFill size={29} /> : <BsHandbag size={29} />}
          <div className={s.cart_count}>{cart.length}</div>
        </NavLink>
      </div>
    </div>
  );
};
