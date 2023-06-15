import { create } from 'zustand';
import { filterProducts } from '../utils/filterProducts';

export const createProductSlice = (set, get) => ({
  sale: [],
  categories: [],
  products: [],

  fetchCategories: async () => {
    const response = await fetch('http://localhost:3333/categories/all');
    set({ categories: await response.json() });
  },

  fetchProducts: async (filters = {}) => {
    let result;
    if (filters?.product) {
      result = await fetch(`http://localhost:3333/products/${filters.product}`);
      result = await result.json();
    } else if (filters?.category) {
      result = await fetch(`http://localhost:3333/categories/${filters.category}`);
      result = await result.json();
      result = await result.data;
    } else {
      result = await fetch(`http://localhost:3333/products/all`);
      result = await result.json();
    }

    result = filterProducts(result, filters);

    set({ products: result });
  },
});

export const useProductStore = create(createProductSlice);
