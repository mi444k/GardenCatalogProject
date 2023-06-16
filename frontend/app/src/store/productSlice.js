import { create } from 'zustand';

export const createProductSlice = (set) => ({
  sale: [],
  categories: [],
  products: [],
});

export const useProductStore = create(createProductSlice);
