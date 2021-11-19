import { configureStore } from '@reduxjs/toolkit'
import fishesReducer from '../services/fishes/fishesSlice'
import paginationReducer from '../services/pagination/paginationSlice'


export const store = configureStore({
  reducer: {
    fishes: fishesReducer,
    pagination: paginationReducer
  }
});
