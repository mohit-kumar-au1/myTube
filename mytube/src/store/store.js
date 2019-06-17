import { createStore, combineReducers } from "redux";
import videoReducer from "./reducers/videoReducer";
import isVideosLoadingReducer from "./reducers/isVideosLoadingReducer";
import currentPlayerVideoReducer from "./reducers/currentPlayerVideoReducer";
import currentVideoCommentsReducer from "./reducers/currentVideoCommentsReducer";
import relatedVideosReducer from "./reducers/relatedVideosReducer";
import playlistsReducer from "./reducers/playlistsReducer";
import newPlaylistReducer from "./reducers/newPlaylistReducer";

let reducer = combineReducers({
  videos: videoReducer,
  isVideosLoading: isVideosLoadingReducer,
  currentPlayerVideo: currentPlayerVideoReducer,
  currentVideoComments: currentVideoCommentsReducer,
  relatedVideos: relatedVideosReducer,
  playlists: playlistsReducer,
  newPlaylist: newPlaylistReducer
});

let store = createStore(reducer);

store.subscribe(() => {
  console.log("Dispatched ==>", store.getState());
});

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
