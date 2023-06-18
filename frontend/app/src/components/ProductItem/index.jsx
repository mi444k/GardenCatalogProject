import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
import { PriceBlock } from '../PriceBlock';
import { useStore } from '../../store';

export const ProductItem = ({ id, title, price, discont_price, image }) => {
  const nodeId = `card${id}${Date.now()}`;
  const { addToCart } = useStore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(id);

    const img = e.target.parentNode.firstChild;
    const coord = img.getBoundingClientRect();
    const clone = img.cloneNode();
    clone.classList.add(s.copy);

    document.getElementById('root').appendChild(clone);

    requestAnimationFrame(function () {
      clone.style.scale = 0.1;
      clone.style.left = `${1272 + window.scrollX}px`;
      clone.style.top = `${-110 + window.scrollY}px`;
    });

    clone.style.scale = 1.05;
    clone.style.left = `${coord.left + window.scrollX}px`;
    clone.style.top = `${coord.top + window.scrollY}px`;

    setTimeout(function () {
      clone.remove();
    }, 500);
  };

  return (
    <NavLink to={`/product/${id}`} className={s.wrapper} id={nodeId}>
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
