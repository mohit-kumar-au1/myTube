import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "../store/store";
import Menu from "./Menu";
import Trending from "./Trending";
import Search from "./Search";
import VideoPlayer from "./videoPlayer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
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
              <div className="col-lg-10">
                <Route path="/" exact={true} component={Trending} />
                <Route path="/search" component={Search} />
                <Route path="/player/:videoId" component={VideoPlayer} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
