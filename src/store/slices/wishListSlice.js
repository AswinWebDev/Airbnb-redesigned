import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addWishList(state, action) {
      return [...state, action.payload];
    },
    removeWishList(state, action) {
      // use filter to remove the item from the array
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addWishList, removeWishList } = wishListSlice.actions;
export const wishListReducer = wishListSlice.reducer;
