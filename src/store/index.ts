// store.ts
import { configureStore } from '@reduxjs/toolkit';
import countKlikSlice from './countKlikSlice';
import showSlice from './showSlice';

const store = configureStore({
  reducer: {
    countKlik: countKlikSlice,
    showHeader: showSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
