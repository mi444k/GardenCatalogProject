import React from 'react';
import error404 from '../../static/images/error404.jpg';
import s from './style.module.css';

export const PageNotFound = () => {
  return <img className={s.img} src={error404} alt="Page not found" />;
};
