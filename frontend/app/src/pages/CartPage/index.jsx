import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import s_item from '../../components/CartItem/style.module.css';
import { useStore } from '../../store';
import { CartItem } from '../../components/CartItem';
import { InputPhone } from '../../components/InputPhone';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FormatedCurrency } from '../../components/Products/PriceBlock';
import empty_cart from '../../static/images/empty_cart.png';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
  const { cart, clearCart, orderThisCart } = useStore();
  const [totalPrice, setTotalPrice] = useState();
  const navigate = useNavigate()

  const handleClearCart = () => {
    console.log(
      [...document.getElementById('cart_items_list').children].map((c) =>
        c.classList.add(s_item.hide_block)
      )
    );
    const deleteTimer = setTimeout(() => clearCart(), 500);

    return () => {
      clearTimeout(deleteTimer);
    };
  };

  const handleOrderAction = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value?.replaceAll(' ', '') || '';
    orderThisCart({ phone });
    navigate('/success')
  };

  useEffect(() => {
    setTotalPrice(
      cart.reduce(
        (a, b) => a + ((b.discont_price || b.price) * b.amount || 0),
        0
      )
    );
  }, [cart]);

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {cart.length === 0 ? (
          <img
            src={empty_cart}
            alt="Cart is empty"
          />
        ) : (
          <>
            <h1>Shopping cart</h1>
            <div className={s.line} />
            <div className={s.cart}>
              <div id="cart_items_list">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                  />
                ))}
              </div>
              <div className={s.detail_block}>
                <h2>
                  Order details
                  <div
                    className={s.clear_cart}
                    onClick={handleClearCart}>
                    <RiDeleteBack2Fill />
                  </div>
                </h2>

                <div className={s.total_price}>
                  <h3>Total</h3>
                  <h2>
                    <FormatedCurrency value={totalPrice} />
                  </h2>
                </div>
                <form onSubmit={handleOrderAction}>
                  <InputPhone className={s.phone_input} />
                  <input
                    type="submit"
                    className={s.order_btn}
                    value="Order"
                  />
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
