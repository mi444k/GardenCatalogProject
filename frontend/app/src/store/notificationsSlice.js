import { create } from 'zustand';

export const createNotificationsSlice = (set) => ({
  messages: [],

  addError: (error) =>
    set((state) => {
      let msg = error;
      if (typeof error === 'string') {
        msg = { title: 'Error', description: error };
      }
      return {
        messages: [...state.messages, { type: 'error', ts: Date.now(), ...msg }],
      };
    }),

  addMessage: (message) =>
    set((state) => {
      let msg = message;
      if (typeof message === 'string') {
        msg = { title: 'Notification', description: message };
      }
      return {
        messages: [...state.messages, { type: 'message', ts: Date.now(), ...msg }],
      };
    }),

  deleteMessage: (ts) => set((state) => ({ messages: state.messages.filter((item) => item.ts !== ts) })),
});

export const useProductStore = create(createNotificationsSlice);
