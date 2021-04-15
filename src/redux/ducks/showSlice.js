import { createSlice } from "@reduxjs/toolkit";

const ShowInfoSlice = createSlice({
  name: "showInfo",
  initialState: {},
  reducers: {
    getShow() {},
    setShow(state, action) {
      const userData = action.payload;
      return { ...state, ...userData };
    },
  },
});

export const { getShow, setShow } = ShowInfoSlice.actions;

export default ShowInfoSlice.reducer;
