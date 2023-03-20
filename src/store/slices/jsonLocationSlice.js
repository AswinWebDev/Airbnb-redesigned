import { createSlice } from "@reduxjs/toolkit";

const jsonLocationSlice = createSlice({
  name: "jsonLocation",
  initialState: "flexible",
  reducers: {
    addLocation(state, action) {
      return action.payload;
    },
  },
});

export const { addLocation } = jsonLocationSlice.actions;
export const jsonLocationReducer = jsonLocationSlice.reducer;
