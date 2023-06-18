import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';

export const CategoryItem = ({ id, title, image }) => {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';

  return (
    <NavLink to={`/category/${id}`} className={s.card}>
      <img src={`${API_URL}/${image}`} alt={title} />
      {title}
    </NavLink>
  );
};
