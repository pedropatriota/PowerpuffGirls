import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import showInfoReducer from "./ducks/showSlice";
import episodesListReducer from "./ducks/episodesListSlice";
import seasontReducer from "./ducks/seasonSlice";
import episodeDetailReducer from "./ducks/episodeDetailSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  showInfo: showInfoReducer,
  episodes: episodesListReducer,
  season: seasontReducer,
  episode: episodeDetailReducer,
});

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(watcherSaga);

export default store;
