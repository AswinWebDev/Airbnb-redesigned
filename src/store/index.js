import { configureStore } from "@reduxjs/toolkit";
import { addJson, jsonDataReducer } from "./slices/jsonDataSlice";
import { addType, jsonTypeReducer } from "./slices/jsonTypeSlice";
import { addLocation, jsonLocationReducer } from "./slices/jsonLocationSlice";
import {
  addWishList,
  removeWishList,
  wishListReducer,
} from "./slices/wishListSlice";

const store = configureStore({
  reducer: {
    jsonData: jsonDataReducer,
    jsonType: jsonTypeReducer,
    jsonLocation: jsonLocationReducer,
    wishList: wishListReducer,
  },
});

export { store, addJson, addType, addLocation, addWishList, removeWishList };
