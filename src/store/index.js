import { configureStore } from "@reduxjs/toolkit";
import { addJson, jsonDataReducer } from "./slices/jsonDataSlice";
import { addType, jsonTypeReducer } from "./slices/jsonTypeSlice";
import { addLocation, jsonLocationReducer } from "./slices/jsonLocationSlice";
import {
  addWishList,
  removeWishList,
  wishListReducer,
} from "./slices/wishListSlice";
import { addPrice, filterPriceReducer } from "./slices/filterPriceSlice";

const store = configureStore({
  reducer: {
    jsonData: jsonDataReducer,
    jsonType: jsonTypeReducer,
    jsonLocation: jsonLocationReducer,
    wishList: wishListReducer,
    filterPrice: filterPriceReducer,
  },
});

export {
  store,
  addJson,
  addType,
  addLocation,
  addWishList,
  removeWishList,
  addPrice,
};
