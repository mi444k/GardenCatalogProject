import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { useStore } from '../../store';
import { CartItem } from '../../components/CartItem';
import { InputPhone } from '../../components/InputPhone';
import { FormatedCurrency } from '../../components/FormatedCurrency';
import { RiDeleteBack2Fill } from 'react-icons/ri';

export const CartPage = () => {
  const { cart, clearCart, orderThisCart } = useStore();
  const [totalPrice, setTotalPrice] = useState();

  const handleOrderAction = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value?.replaceAll(' ', '') || '';
    orderThisCart({ phone });
  };

  useEffect(() => {
    setTotalPrice(cart.reduce((a, b) => a + ((b.discont_price || b.price) * b.amount || 0), 0));
  }, [cart]);

  return (
    <div className={s.wrapper}>
      <h1>Shopping cart</h1>
      <div className={s.content}>
        <div>
          <div className={s.line}></div>
          {cart.length === 0 ? (
            <h1>Cart is empty.</h1>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
        <div className={s.detail_block}>
          {cart.length === 0 ? <div className={s.detail_block_locker} /> : <></>}
          <h2>
            Order details
            <div className={s.clear_cart} onClick={clearCart}>
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
            <input type="submit" className={s.order_btn} value="Order" />
          </form>
        </div>
      </div>
    </div>
  );
};
