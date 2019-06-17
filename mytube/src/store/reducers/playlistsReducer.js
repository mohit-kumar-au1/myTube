import { store } from "../store";
import { fetchPlaylists } from "../api/youtube";

function playlistsReducer(playlist = [], action) {
  if (action.type === "FETCH_PLAYLISTS") {
    fetchPlaylists(store, action);
  }

  if (action.type === "PLAYLIST_CREATED") {
    fetchPlaylists(store, action);
  }

  if (action.type === "PLAYLISTS_LOADED") {
    return action.playlists;
  }
  return playlist;
}

export default playlistsReducer;
