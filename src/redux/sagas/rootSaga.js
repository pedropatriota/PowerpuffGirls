import { takeLatest, all } from "redux-saga/effects";
import { handleGetShow } from "./handlers/show";
import { handleGetEpisodeDetail } from "./handlers/episode";
import { handleGetSeason } from "./handlers/season";
import { getShow } from "../ducks/showSlice";
import { getEpisode } from "../ducks/episodeDetailSlice";
import { getSeason } from "../ducks/seasonSlice";

export function* watcherSaga() {
  yield all([
    takeLatest(getShow.type, handleGetShow),
    takeLatest(getSeason.type, handleGetSeason),
    takeLatest(getEpisode.type, handleGetEpisodeDetail),
  ]);
}
