import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { multiplySlice } from './slices/counter/multiply'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    multiply: multiplySlice.reducer,
  },
})