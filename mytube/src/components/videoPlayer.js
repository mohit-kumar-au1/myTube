import React from "react";
import { connect } from "react-redux";

import { store, stateMapper } from "../store/store";

class VideoPlayerComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_VIDEO_DATA",
      videoId: this.props.match.params.videoId
    });
  }

  renderTitle() {
    if (!this.props.currentPlayerVideo.snippet) {
      return "Loading..";
    } else {
      return this.props.currentPlayerVideo.snippet.title;
    }
  }

  render() {
    return (
      <div>
        <h2>{this.renderTitle()}</h2>
        <hr />
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${
              this.props.match.params.videoId
            }rel=0`}
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;
