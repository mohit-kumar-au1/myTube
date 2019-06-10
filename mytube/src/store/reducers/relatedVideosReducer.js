import { store } from "../store";
import { fetchRelatedVideos } from "../api/youtube";

function relatedVideosReducer(relatedVideos = [], action) {
  if (action.type === "FETCH_RELATED_VIDEOS") {
    fetchRelatedVideos(store, action);
  }

  if (action.type == "CLEAR_PLAYER_VIDEO") {
    return [];
  }

  if (action.type === "LOAD_RELATED_VIDEOS") {
    return action.relatedVideos;
  }

  return relatedVideos;
}

export default relatedVideosReducer;
