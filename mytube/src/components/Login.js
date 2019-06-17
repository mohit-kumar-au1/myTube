import React from "react";
import { GoogleLogin } from "react-google-login";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.googleResponse = this.googleResponse.bind(this);
  }

  googleResponse(response) {
    if (!response || !response.accessToken) {
      alert("Sorry, Google login sign in failed. Try again");
      return;
    }

    let user = {
      name: response.profileObj.name,
      token: response.accessToken
    };
    localStorage.setItem("user", JSON.stringify(user));

    this.props.history.push("/app");
  }

  render() {
    let user = localStorage.getItem("user");

    if (!user) {
      return (
        <div>
          <GoogleLogin
            clientId="108316897601-496m9em8ji5c2el2392n6f0dmdijp4uo.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.googleResponse}
            onFailure={this.googleResponse}
            scope="https://www.googleapis.com/auth/youtube"
          />
        </div>
      );
    } else {
      return <p>welcome {user.name}</p>;
    }
  }
}

export default Login;
