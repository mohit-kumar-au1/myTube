import React from "react";

import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item bg-dark text-white h5">
          <i class="fas fa-bars mr-4" /> Menu
        </li>
        <li className="list-group-item">
          <i class="fas fa-bolt mr-4" />
          <Link to="/">
            <span className="text-dark"> Trending</span>
          </Link>
        </li>
        <li className="list-group-item">
          <i class="fas fa-search mr-4" />
          <Link to="/search">
            <span className="text-dark">Search</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default Menu;
