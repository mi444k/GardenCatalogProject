import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../store';
import s from './style.module.css';
import { PriceBlock } from '../../components/Products/PriceBlock';
import { fetchProducts } from '../../actions/asyncApi';

export const SingleProductPage = () => {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';
  const { products, addToCart } = useStore();
  const navigate = useNavigate();
  const { pid } = useParams();

  const handleAddToCart = () => {
    addToCart(products[0].id);
  };

  const handleGoBack = (e) => {
    // e.preventDefault()
    navigate(-1);
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
          <div className={s.title_header}>
            <h1 className={s.title}>{products[0].title}</h1>
            <span onClick={handleGoBack} className={s.go_back_btn}>
              {'<<< Go back'}
            </span>
          </div>
          <div className={s.wrapper}>
            <img src={`${API_URL}/${products[0].image}`} alt={products[0].title} />
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
