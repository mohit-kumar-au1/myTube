import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class CommentsComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_VIDEO_COMMENTS",
      videoId: this.props.videoId
    });
  }

  render() {
    return this.props.currentVideoComments.map(c => {
      return (
        <div key={c.id}>
          <img
            src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt={c.snippet.topLevelComment.snippet.authorDisplayName}
            className="mr-2 mb-2"
            style={{ borderRadius: "50%", width: "40px" }}
          />{" "}
          <strong>{c.snippet.topLevelComment.snippet.authorDisplayName}</strong>
          <br />
          {c.snippet.topLevelComment.snippet.textOriginal}
          <hr />
        </div>
      );
    });
  }
}

let Comments = connect(stateMapper)(CommentsComponent);

export default Comments;
