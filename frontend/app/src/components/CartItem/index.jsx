import React, { useState } from 'react';
import s from './style.module.css';
import { PriceBlock } from '../Products/PriceBlock';
import { NavLink } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { LuDelete } from 'react-icons/lu';
import { useStore } from '../../store';

export const CartItem = ({ id, title, amount, price, discont_price, image }) => {
  const { minusProduct, plusProduct, deleteProduct } = useStore();
  const [style, setStyle] = useState(s.wrapper);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';

  const handleDeleteFromCart = () => {
    setStyle(`${s.wrapper} ${s.hide_block}`);
    const deleteTimer = setTimeout(() => deleteProduct({ pid: id }), 500);

    return () => {
      clearTimeout(deleteTimer);
    };
  };

  return (
    <div className={style}>
      <div className={s.content}>
        <div className={s.delete_btn} onClick={handleDeleteFromCart}>
          <LuDelete />
        </div>
        <NavLink to={`/product/${id}`}>
          <img src={`${API_URL}/${image}`} className={s.image} alt={title} />
        </NavLink>
        <div>
          <NavLink to={`/product/${id}`}>{title}</NavLink>
          <div className={s.amount_wrapper}>
            <div className={s.amount_sign}>
              <AiOutlineMinusCircle onClick={() => minusProduct({ pid: id })} />
            </div>
            {amount}
            <div className={s.amount_sign}>
              <AiOutlinePlusCircle onClick={() => plusProduct({ pid: id })} />
            </div>
          </div>
        </div>
        <PriceBlock {...{ price, discont_price }} />
      </div>
      <div className={s.line}></div>
    </div>
  );
};
