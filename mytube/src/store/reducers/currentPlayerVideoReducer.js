import { fetchOneVideo } from "../api/youtube";
import { store } from "../store";

function currentPlayerVideoReducer(currentPlayerVideo = {}, action) {
  if (action.type === "FETCH_VIDEO_DATA") {
    fetchOneVideo(store, action);
  }
  if (action.type === "VIDEO_DATA_LOADED") {
    return action.videoData;
  }

  return currentPlayerVideo;
}

export default currentPlayerVideoReducer;
