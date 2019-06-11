import React from "react";
import { connect } from "react-redux";

import { store, stateMapper } from "../store/store";
import Comments from "./Comments";
import RelatedVideos from "./RelatedVideos";

class VideoPlayerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMoreClicked: false
    };

    this.showMoreClicked = this.showMoreClicked.bind(this);
    this.showLessClicked = this.showLessClicked.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_VIDEO_DATA",
      videoId: this.props.match.params.videoId
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_VIDEO_DATA"
    });
  }

  renderTitle() {
    if (!this.props.currentPlayerVideo.snippet) {
      return "Loading..";
    } else {
      return this.props.currentPlayerVideo.snippet.title;
    }
  }

  showMoreClicked() {
    this.setState({
      showMoreClicked: true
    });
  }

  showLessClicked() {
    this.setState({
      showMoreClicked: false
    });
  }

  renderDescription() {
    if (this.state.showMoreClicked) {
      return (
        <p>
          {this.props.currentPlayerVideo.snippet &&
            this.props.currentPlayerVideo.snippet.description}{" "}
          <br />
          <button
            onClick={this.showLessClicked}
            className="btn btn-secondary btn-sm mt-2"
          >
            Show Less
          </button>
        </p>
      );
    } else {
      return (
        <p>
          {`${this.props.currentPlayerVideo.snippet &&
            this.props.currentPlayerVideo.snippet.shortDescription}...`}{" "}
          <br />
          <button
            onClick={this.showMoreClicked}
            className="btn btn-secondary btn-sm mt-2"
          >
            Show More
          </button>
        </p>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md">
              <div>
                <h4>{this.renderTitle()}</h4>
              </div>
              <hr />

              <div className="embed-responsive embed-responsive-16by9 rounded">
                <iframe
                  className="embed-responsive-item"
                  title="player"
                  src={`https://www.youtube.com/embed/${
                    this.props.match.params.videoId
                  }`}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <div>
                <span
                  className="badge badge-pill badge-dark my-3 px-3 py-2"
                  style={{ fontSize: "100%" }}
                >
                  <i className="fas fa-eye mr-2" />
                  {this.props.currentPlayerVideo.statistics &&
                    this.props.currentPlayerVideo.statistics.viewCount}{" "}
                </span>
                <span className="float-right">
                  <span
                    className="badge badge-pill badge-success m-3 px-3 py-2"
                    style={{ fontSize: "100%" }}
                  >
                    <i className="fas fa-thumbs-up mr-2" />
                    {this.props.currentPlayerVideo.statistics &&
                      this.props.currentPlayerVideo.statistics.likeCount}
                  </span>
                  <span
                    className="badge badge-pill badge-danger my-3 px-3 py-2"
                    style={{ fontSize: "100%" }}
                  >
                    <i className="fas fa-thumbs-down mr-2" />
                    {this.props.currentPlayerVideo.statistics &&
                      this.props.currentPlayerVideo.statistics.dislikeCount}
                  </span>
                </span>
              </div>

              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md">{this.renderDescription()}</div>
          </div>

          <div className="row">
            <div className="col-md">
              <hr />
              <h5 className="mb-4">
                {this.props.currentPlayerVideo.statistics &&
                  this.props.currentPlayerVideo.statistics.commentCount}{" "}
                Comments
              </h5>
              <Comments videoId={this.props.match.params.videoId} />
            </div>
          </div>
        </div>
        <div className="col-md-4 pr-5">
          <div className="row">
            <div className="col-md">
              <h4>Related Videos</h4>
              <hr />
              <RelatedVideos videoId={this.props.match.params.videoId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;
