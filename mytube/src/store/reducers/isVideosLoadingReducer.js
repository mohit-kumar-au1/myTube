import { fetchVideos } from "../api/youtube";
import { store } from "../store";

function isVideosLoadingReducer(isVideosLoading = false, action) {
  if (action.type === "FETCH_VIDEOS") {
    return true;
  }

  if (action.type === "VIDEOS_LOADED") {
    return false;
  }

  return isVideosLoading;
}

export default isVideosLoadingReducer;