import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../store';
import s from './style.module.css';
import { PriceBlock } from '../../components/PriceBlock';

export const SingleProductPage = () => {
  const { products, fetchProducts, addToCart } = useStore();
  const { pid } = useParams();

  const handleAddToCart = () => {
    addToCart(products[0]);
  };

  useEffect(() => {
    const fetch = async () => {
      if (pid && !isNaN(+pid)) {
        await fetchProducts({ product: +pid });
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pid]);

  return (
    <>
      {products.length !== 1 ? (
        <h1>Product not found</h1>
      ) : (
        <>
          <h1 className={s.title}>{products[0].title}</h1>
          <div className={s.wrapper}>
            <img src={`http://localhost:3333${products[0].image}`} alt={products[0].title} />
            <div className={s.info_block}>
              <PriceBlock
                {...{ price: products[0].price, discont_price: products[0].discont_price }}
                className={s.price_info}
              />
              <div className={s.add_btn} onClick={handleAddToCart}>
                To cart
              </div>
              <div className={s.line} />
              <div className={s.description}>
                <p>Description</p>
                <p>{products[0].description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
