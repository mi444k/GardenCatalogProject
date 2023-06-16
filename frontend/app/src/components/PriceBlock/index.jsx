import React from 'react';
import s from './style.module.css';
import { FormatedCurrency } from '../FormatedCurrency';

export const PriceBlock = ({ price, discont_price, className }) => {
  const discount = discont_price ? Math.round((price / discont_price) * 100 - 100) : 0;
  return (
    <div className={className ? className : s.wrapper}>
      <span className={s.price}>
        <FormatedCurrency value={discont_price ? discont_price : price} />
      </span>
      {discont_price && (
        <>
          <span className={s.full_price}>
            <FormatedCurrency value={price} />
          </span>
          <span className={s.discount}>{discount}%</span>
        </>
      )}
    </div>
  );
};
