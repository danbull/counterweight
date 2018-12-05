import React, { Component } from "react";
import { withRouter } from "react-router";
import { auth, firebaseApp} from "../../utils/base";

import LoginView from "./LoginView";

class LoginContainer extends Component {
  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await auth
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
      console.log("Logging in")
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleLogin} />;
  }
}

export default withRouter(LoginContainer);
