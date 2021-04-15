import { call, put } from "redux-saga/effects";
import { setShow } from "../../ducks/showSlice";
import api from "../../../services/api";

export function* handleGetShow() {
  try {
    const response = yield call(api.get, "shows/6771");
    const { data } = response;

    yield put(setShow({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
