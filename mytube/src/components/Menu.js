import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class MenuComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_PLAYLISTS"
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group mb-4">
          <li className="list-group-item bg-dark text-white h5">
            <i className="fas fa-bars mr-3" /> Menu
          </li>
          <li className="list-group-item">
            <i className="fas fa-bolt mr-4" />
            <Link to="/app">
              <span className="text-dark"> Trending</span>
            </Link>
          </li>
          <li className="list-group-item">
            <i className="fas fa-search mr-4" />
            <Link to="/app/search">
              <span className="text-dark">Search</span>
            </Link>
          </li>
          <li className="list-group-item">
            <i className="fas fa-user mr-4" />
            <Link to="/app/profile">
              <span className="text-dark">Profile</span>
            </Link>
          </li>
          <li className="list-group-item">
            <i className="fas fa-sign-out-alt mr-4" />
            <Link to="/app/logout">
              <span className="text-dark">Logout</span>
            </Link>
          </li>
        </ul>

        <ul className="list-group mb-4">
          <li className="list-group-item bg-dark text-white h5">
            <i className="fas fa-headphones-alt mr-3" /> Playlists
          </li>
          {this.props.playlists &&
            this.props.playlists.map(p => {
              return (
                <li key={p.etag} className="list-group-item">
                  <i className="fas fa-bolt mr-4" />

                  <Link to={`/app/playlists/${p.id}`} className="text-dark">
                    {p.snippet.title}>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

let Menu = connect(stateMapper)(MenuComponent);

export default Menu;
