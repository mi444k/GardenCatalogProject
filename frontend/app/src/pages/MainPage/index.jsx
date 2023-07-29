import React from 'react';
import { NavLink } from 'react-router-dom';
import saleImage from '../../static/images/sale.png';
import gnomeImage from '../../static/images/gnome.png';

import s from './style.module.css';
import { ProductsContainer } from '../../components/Products/ProductsContainer';
import { CategoriesContainer } from '../../components/Categories/CategoriesContainer';
import { InputPhone } from '../../components/InputPhone';
import { isValidPhoneNumber } from 'react-phone-number-input'
import { useStore } from '../../store';

export const MainPage = () => {
  const {addError} = useStore();
  const onSubmitDiscountForm = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value?.replaceAll(' ', '') || '';
    if (!isValidPhoneNumber(phone)) {
      return addError(`Invalid phone number: ${phone}`)
    }
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';
    const resp = await fetch(`${API_URL}/sale/send`, {
      method: 'POST',
      body: JSON.stringify({ tel: phone }),
    });
    console.log(await resp.json());
  };

  return (
    <div>
      <div className={s.sale_banner}>
        <div className={s.sale_info}>
          <p>Sale</p>
          <p>New season</p>
          <NavLink to="sales" className={s.sale_btn}>
            Sale
          </NavLink>
        </div>
        <NavLink to="sales">
          <img src={saleImage} className={s.sale_image} alt="Sale: New season" />
        </NavLink>
      </div>

      <div className={s.categories_wrapper}>
        <div className={s.categories_title}>
          <h1>Catalog</h1>
          <NavLink to="/categories" className={s.btn}>
            All categories
          </NavLink>
        </div>
        <div className={s.categories_items}>
          <CategoriesContainer limit={3} random={true} />
        </div>
      </div>

      <div className={s.get_discount_wrapper}>
        <img src={gnomeImage} className={s.gnome_image} alt="Get discount" />
        <div className={s.get_discount}>
          <span className={s.get_discount_title}>
            5% off
            <br />
            on the first order
          </span>
          <form onSubmit={onSubmitDiscountForm}>
            <InputPhone className={s.phone_input} />
            <input type="submit" className={s.get_discount_btn} value="Get a discount" />
          </form>
        </div>
      </div>

      <div className={s.sale_wrapper}>
        <h1 className={s.sale_title}>Sale</h1>
        <ProductsContainer
          key={'top'}
          showFilters={false}
          initFiltersState={{ limit: 3, sorted: 'random', discounted: true }}
        />
      </div>
    </div>
  );
};
