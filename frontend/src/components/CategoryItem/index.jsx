import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';

export const CategoryItem = ({ id, title, image }) => {
  return (
    <NavLink to={`/category/${id}`} className={s.card}>
      <img src={`http://localhost:3333/${image}`} alt={title} />
      {title}
    </NavLink>
  );
};
