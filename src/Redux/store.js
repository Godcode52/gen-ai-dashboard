import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';

export const store = configureStore({
  reducer: {
    queries: queryReducer,
  },
});