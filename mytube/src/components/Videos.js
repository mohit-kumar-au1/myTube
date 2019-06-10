import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { stateMapper } from "../store/store";

class VideosComponent extends React.Component {
  renderVideos() {
    return this.props.videos.map(v => {
      let videoId = v.id;

      if (typeof videoId != "string") {
        videoId = v.id.videoId;
      }

      return (
        <div key={v.etag} className="col-sm-6 col-md-4 col-lg-3">
          <Link to={`/player/${videoId}`}>
            <img
              className="img-fluid mb-1 rounded"
              src={v.snippet.thumbnails.high.url}
              alt={v.snippet.title}
            />
            <p className=" text-dark font-weight-bold">
              {v.snippet.title
                .split(" ")
                .slice(0, 10)
                .join(" ")}
            </p>
          </Link>
          <p className="mt-1">
            <i className="fas fa-user-circle mr-2 text-muted" />
            <a
              className="text-muted"
              target="_blank"
              href={`https://www.youtube.com/channel/${v.snippet.channelId}`}
            >
              <small className="">{v.snippet.channelTitle}</small>
            </a>
          </p>
          <hr />
        </div>
      );
    });
  }

  render() {
    if (this.props.isVideosLoading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else return <div className="row">{this.renderVideos()}</div>;
  }
}

let Videos = connect(stateMapper)(VideosComponent);

export default Videos;
