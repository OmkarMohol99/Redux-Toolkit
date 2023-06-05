import { createSlice } from '@reduxjs/toolkit'



export const multiplySlice = createSlice({
  name: 'multiply',
  initialState: 0,
  reducers: {
    multiply: (state) => state + 5 * (3),
    reset: (state) => state * 0,
    decreaseByEnteredValue: (state, action) => state - action.payload,
  },
})

// Action creators are generated for each case reducer function
export const { multiply, reset, decreaseByEnteredValue } = multiplySlice.actions

export default multiplySlice.reducer