import { createStore, combineReducers } from "redux";
import videoReducer from "./reducers/videoReducer";
import isVideosLoadingReducer from "./reducers/isVideosLoadingReducer";
import currentPlayerVideoReducer from "./reducers/currentPlayerVideoReducer";

let reducer = combineReducers({
  videos: videoReducer,
  isVideosLoading: isVideosLoadingReducer,
  currentPlayerVideo: currentPlayerVideoReducer
});

let store = createStore(reducer);

store.subscribe(() => {
  console.log("Dispatched ==>", store.getState());
});

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
