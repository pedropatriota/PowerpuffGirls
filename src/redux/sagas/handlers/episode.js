import { call, put } from "redux-saga/effects";
import { setEpisode } from "../../ducks/episodeDetailSlice";
import api from "../../../services/api";

export function* handleGetEpisodeDetail({ payload }) {
  try {
    const response = yield call(api.get, `episodes/${payload}`);
    const { data } = response;
    yield put(setEpisode(data));
  } catch (error) {
    console.log(error);
  }
}
