import s from './style.module.css';
import { NavLink } from 'react-router-dom';

export const CartSmallItem = ({
  id,
  title,
  amount,
  image,
}) => {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';

  return (
    <>
      <div className={s.content}>
        <div className={s.content}>
        <NavLink to={`/product/${id}`}>
          <img
            src={`${API_URL}/${image}`}
            className={s.image}
            alt={title}
          />
        </NavLink>
        <NavLink to={`/product/${id}`}>{title}</NavLink>
        </div>
        <span>x{amount}</span>
      </div>
    </>
  );
};
