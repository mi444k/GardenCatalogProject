import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const createCartSlice = persist(
  (set) => ({
    cart: [],

    addToCart: (iid) =>
      set((state) => {
        const inCart = state.cart.find(({ id }) => id === iid);
        if (inCart) {
          inCart.amount++;
          state.addMessage({ description: `1 x ${inCart.title}`, title: 'Added in your cart...' });
        } else {
          const item = state.products.find(({ id }) => id === iid);
          state.addMessage({ description: `1 x ${item.title}`, title: 'Added in your cart...' });
          return { cart: [...state.cart, { ...item, amount: 1 }] };
        }
        return {};
      }),

    deleteProduct: ({ pid }) =>
      set((state) => {
        return { cart: [...state.cart.filter(({ id }) => id !== pid)] };
      }),

    minusProduct: ({ pid }) =>
      set((state) => {
        const inCart = state.cart.find(({ id }) => id === pid);
        if (inCart) {
          if (inCart.amount > 1) inCart.amount--;
          else return { cart: state.cart.filter(({ id }) => id !== pid) };
        }
        return { cart: [...state.cart] };
      }),

    plusProduct: ({ pid }) =>
      set((state) => {
        const inCart = state.cart.find(({ id }) => id === pid);
        if (inCart) {
          inCart.amount++;
        }
        return { cart: [...state.cart] };
      }),

    clearCart: () => set({ cart: [] }),

    orderThisCart: ({ phone }) =>
      set((state) => {
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';
        const order = JSON.stringify({
          phone,
          cart: [...state.cart.map((item) => ({ id: item.id, amount: item.amount }))],
        });
        fetch(`${API_URL}/order/send`, {
          method: 'POST',
          body: order,
        })
          .then((data) => data.json())
          .then((json) => console.log(json))
          .catch((err) => console.log(`ERROR: ${err}`));
        return { cart: [] };
      }),
  }),
  {
    name: 'garden-cart-storage',
    storage: createJSONStorage(() => sessionStorage),
  }
);

export const useCartStore = create(createCartSlice);
