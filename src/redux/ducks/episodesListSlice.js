import { createSlice } from "@reduxjs/toolkit";

const EpisodesListSlice = createSlice({
  name: "episodesList",
  initialState: [],
  reducers: {
    getEpisodes() {},
    setEpisodes(state, action) {
      const episodesData = action.payload;
      return episodesData;
    },
  },
});

export const { getEpisodes, setEpisodes } = EpisodesListSlice.actions;

export default EpisodesListSlice.reducer;
