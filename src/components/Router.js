import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import WeightSummary from "./WeightSummary";
import WeightStats from "./WeightStats";

const Router = () => (
  <BrowserRouter> 
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/weight-summary" component={WeightSummary}/>
      <Route exact path="/weight-stats" component={WeightStats}/>
    </Switch>
  </BrowserRouter>
);

export default Router;