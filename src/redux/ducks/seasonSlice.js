import { createSlice } from "@reduxjs/toolkit";

const SeasonSlice = createSlice({
  name: "Season",
  initialState: [],
  reducers: {
    getSeason() {},
    setSeason(state, action) {
      const seasonData = action.payload;
      return seasonData;
    },
  },
});

export const { getSeason, setSeason } = SeasonSlice.actions;

export default SeasonSlice.reducer;
