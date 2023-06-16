import { create } from 'zustand';

export const createLocalesSlice = (set) => ({
  locales: {},
});

export const useProductStore = create(createLocalesSlice);
