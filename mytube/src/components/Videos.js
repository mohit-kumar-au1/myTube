import React from "react";
import { connect } from "react-redux";
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
          <a
            target="_blank"
            href={`https://www.youtube.com/watch?v=${videoId}`}
          >
            <img
              className="img-fluid mb-1"
              src={v.snippet.thumbnails.high.url}
              alt={v.snippet.title}
            />
            <p className=" text-dark font-weight-bold">
              {v.snippet.title
                .split(" ")
                .slice(0, 10)
                .join(" ")}
            </p>
          </a>
          <p className="mt-1">
            <i class="fas fa-user-circle mr-2 text-muted" />
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
    return <div className="row">{this.renderVideos()}</div>;
  }
}

let Videos = connect(stateMapper)(VideosComponent);

export default Videos;
