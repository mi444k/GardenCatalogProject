import { create } from 'zustand';

export const createLocaleSlice = (set) => ({
  locale: {},

  fetchLocale: async () => {
    const response = await fetch('https://ipapi.co/json/');
    set({ locale: await response.json() });
  },
});

export const useProductStore = create(createLocaleSlice);
