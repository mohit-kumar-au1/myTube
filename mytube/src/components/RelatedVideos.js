import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { stateMapper } from "../store/store";

class RelatedVideosComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_RELATED_VIDEOS",
      videoId: this.props.videoId
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_PLAYER_VIDEO"
    });
  }

  render() {
    return this.props.relatedVideos.map(r => {
      let videoId = r.id;

      if (typeof videoId != "string") {
        videoId = r.id.videoId;
      }
      return (
        <div key={r.etag}>
          <Link to={`/player/${videoId}`}>
            <img
              className="img-fluid mb-1 rounded"
              src={r.snippet.thumbnails.high.url}
              alt={r.snippet.title}
            />
            <p className="text-dark font-weight-bold">
              {r.snippet.title
                .split(" ")
                .slice(0, 6)
                .join(" ")}
            </p>
          </Link>
          <p className="mt-1">
            <i className="fas fa-user-circle mr-2 text-muted" />
            <a
              className="text-muted"
              target="_blank"
              href={`https://www.youtube.com/channel/${r.snippet.channelId}`}
            >
              <small className="">{r.snippet.channelTitle}</small>
            </a>
          </p>
          <hr />
        </div>
      );
    });
  }
}

let RelatedVideos = connect(stateMapper)(RelatedVideosComponent);

export default RelatedVideos;
