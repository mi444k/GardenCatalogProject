import React from 'react';
import successImage from '../../static/images/success.png';
import s from './style.module.css';

export const SuccesPage = () => {
  return (
    <div className={s.wrapper}>
      <h1>CONGRATULATIONS!</h1>
      <h3>YOUR ORDER HAS BEEN PLACED</h3>
      <img
        src={successImage}
        className={s.success_image}
        alt="Order success"
      />
    </div>
  );
};
