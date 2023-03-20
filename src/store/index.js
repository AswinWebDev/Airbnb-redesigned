import { configureStore } from "@reduxjs/toolkit";
import { addJson, jsonDataReducer } from "./slices/jsonDataSlice";
import { addType, jsonTypeReducer } from "./slices/jsonTypeSlice";
import { addLocation, jsonLocationReducer } from "./slices/jsonLocationSlice";

const store = configureStore({
  reducer: {
    jsonData: jsonDataReducer,
    jsonType: jsonTypeReducer,
    jsonLocation: jsonLocationReducer,
  },
});

export { store, addJson, addType, addLocation };
