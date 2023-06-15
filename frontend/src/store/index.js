import { create } from 'zustand';
import { createCartSlice } from './сartSlice';
import { createProductSlice } from './productSlice';
import { createLocaleSlice } from './localesSlice';

export const useStore = create((...a) => ({
  ...createCartSlice(...a),
  ...createProductSlice(...a),
  ...createLocaleSlice(...a),
}));
