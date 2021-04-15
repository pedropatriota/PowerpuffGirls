import { call, put, all } from "redux-saga/effects";
import { setSeason } from "../../ducks/seasonSlice";
import { setEpisodes } from "../../ducks/episodesListSlice";
import api from "../../../services/api";

export function* handleGetSeason() {
  try {
    const response = yield call(api.get, "shows/6771/seasons");
    const { data } = response;

    yield put(setSeason(data));

    const res = yield all([
      ...data.map((item) => call(api.get, `seasons/${item.id}/episodes`)),
    ]);

    yield put(setEpisodes(res));
  } catch (error) {
    console.log(error);
  }
}
