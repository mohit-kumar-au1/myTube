import { fetchVideos } from "../api/youtube";
import { store } from "../store";

function videoReducer(videos = [], action) {
  if (action.type == "CLEAR_VIDEOS") {
    return [];
  }
  if (action.type === "FETCH_VIDEOS") {
    fetchVideos(store, action); 
  }

  if (action.type === "VIDEOS_LOADED") {
    videos = action.videos;
  }

  return videos;
}

export default videoReducer;
