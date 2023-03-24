import { createSlice } from "@reduxjs/toolkit";

const filterPriceSlice = createSlice({
  name: "filterPrice",
  initialState: [0, 100],
  reducers: {
    addPrice(state, action) {
      return action.payload;
    },
  },
});

export const { addPrice } = filterPriceSlice.actions;
export const filterPriceReducer = filterPriceSlice.reducer;
