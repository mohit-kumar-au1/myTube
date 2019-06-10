import React from "react";
import { connect } from "react-redux";

import Videos from "./Videos";
import { stateMapper } from "../store/store";

class TrendingComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_VIDEOS",
      videoType: "trending"
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_VIDEOS"
    });
  }

  render() {
    return (
      <div>
        <h3>Trending Videos</h3>
        <hr />
        <Videos />
      </div>
    );
  }
}

let Trending = connect(stateMapper)(TrendingComponent);

export default Trending;
