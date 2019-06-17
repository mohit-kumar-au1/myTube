import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { store } from "../store/store";
import Menu from "./Menu";
import Trending from "./Trending";
import Search from "./Search";
import Profile from "./Profile";
import Logout from "./Logout";
import VideoPlayer from "./videoPlayer";
import CreatePlaylist from "./CreatePlaylist";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-lg-2 pl-5">
              <h4>
                <i className="fas fa-play mx-3" />
                MyTube
              </h4>
              <hr />
              <Menu />
            </div>
            <div className="col-lg-10 pr-5">
              <Route path="/app" exact={true} component={Trending} />
              <Route path="/app/search" component={Search} />
              <Route path="/app/profile" component={Profile} />
              <Route path="/app/logout" component={Logout} />
              <Route path="/app/playlists/create" component={CreatePlaylist} />
              <Route path="/app/player/:videoId" component={VideoPlayer} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
