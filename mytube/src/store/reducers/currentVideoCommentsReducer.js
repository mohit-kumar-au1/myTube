import { store } from "../store";
import { fetchVideoComments } from "../api/youtube";

function currentVideoCommentsReducer(currentVideoComments = [], action) {
  //call the function to send comment request to api
  if (action.type === "FETCH_VIDEO_COMMENTS") {
    fetchVideoComments(store, action);
  }

  //to recieve comments from api through dispatch function
  if (action.type === "VIDEO_COMMENTS_LOADED") {
    return action.comments;
  }

  return currentVideoComments;
}

export default currentVideoCommentsReducer;
