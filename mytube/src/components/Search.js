import React from "react";
import { connect } from "react-redux";

import Videos from "./Videos";
import { stateMapper } from "../store/store";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "CLEAR_VIDEOS"
    });
  }

  inputChanged(event) {
    this.setState({
      query: event.target.value
    });
  }

  buttonClicked() {
    this.props.dispatch({
      type: "FETCH_VIDEOS",
      videoType: "search",
      query: this.state.query
    });
  }

  render() {
    return (
      <div>
        <h3>Search Videos</h3>
        <hr />
        <div className="form-row">
          <div className="col">
            <input
              onChange={this.inputChanged}
              type="text"
              className="form-control form-control-lg mb-5"
              placeholder="Search"
            />
          </div>
          <button
            type="submit"
            onClick={this.buttonClicked}
            className="btn btn-dark btn-lg mb-5"
          >
            Search
          </button>
        </div>
        <Videos />
      </div>
    );
  }
}

let Search = connect(stateMapper)(SearchComponent);

export default Search;
