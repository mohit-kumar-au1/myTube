import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store, stateMapper } from "../store/store";
import Videos from "./Videos";
import Menu from "./Menu";
import Trending from "./Trending";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container-fluid my-3">
            <div className="row">
              <div className="col-md-2 pl-4">
                <h3>
                  <i class="fas fa-play mx-4" />
                  myTube
                </h3>
                <hr />
                <Menu />
              </div>
              <div className="col-md-10 px-4">
                <Route path="/" exact={true} component={Trending} />
                <Route path="/search" component={Search} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
