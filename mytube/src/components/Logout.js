import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  render() {
    localStorage.removeItem("user");

    return (
      <div>
        <p>Logging out.. Please wait..</p>
        <Redirect to="/login" />
      </div>
    );
  }
}

export default Logout;
