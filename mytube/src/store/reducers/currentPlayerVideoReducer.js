import { fetchOneVideo } from "../api/youtube";
import { store } from "../store";

function currentPlayerVideoReducer(currentPlayerVideo = {}, action) {
  if (action.type === "FETCH_VIDEO_DATA") {
    fetchOneVideo(store, action);
  }
  if (action.type === "VIDEO_DATA_LOADED") {
    let newAction = action.videoData;
    newAction.snippet.shortDescription = action.videoData.snippet.description.slice(
      0,
      300
    );
    return newAction;
  }
  if (action.type === "CLEAR_VIDEO_DATA") {
    return {};
  }

  return currentPlayerVideo;
}

export default currentPlayerVideoReducer;
