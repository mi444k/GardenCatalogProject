import { create } from 'zustand';
import { createCartSlice } from './сartSlice';
import { createProductSlice } from './productSlice';
import { createLocalesSlice } from './localesSlice';
import { createNotificationsSlice } from './notificationsSlice';

export const useStore = create((...a) => ({
  ...createCartSlice(...a),
  ...createProductSlice(...a),
  ...createLocalesSlice(...a),
  ...createNotificationsSlice(...a),
}));
