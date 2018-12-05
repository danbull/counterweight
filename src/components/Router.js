import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import WeightSummary from "./WeightSummary";
import WeightStats from "./WeightStats";
import Login from "./Login/index";
import PrivateRoute from "../PrivateRoute"
import { auth, firebaseApp} from "../utils/base";


class Router extends Component {

  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  
  render() {
    return (
      <BrowserRouter> 
      <Switch>
        <PrivateRoute exact path="/" component={App} authenticated={this.state.authenticated}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/weight-summary" component={WeightSummary}/>
        <Route exact path="/weight-stats" component={WeightStats}/>
      </Switch>
    </BrowserRouter>
  
    )
  }
};

export default Router;