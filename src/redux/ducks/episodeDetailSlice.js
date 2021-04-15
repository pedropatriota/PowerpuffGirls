import { createSlice } from "@reduxjs/toolkit";

const EpisodeDetailSlice = createSlice({
  name: "episodesDetail",
  initialState: {},
  reducers: {
    getEpisode() {},
    setEpisode(state, action) {
      const episodeData = action.payload;
      return episodeData;
    },
  },
});

export const { getEpisode, setEpisode } = EpisodeDetailSlice.actions;

export default EpisodeDetailSlice.reducer;
