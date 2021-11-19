import { configureStore } from '@reduxjs/toolkit';
import fishesReducer from '../services/fishes/fishesSlice';


export const store = configureStore({
  reducer: {
    fishes: fishesReducer,
  },
});
