import React, { Component } from "react";
import Siema from "siema";
import data from "../data";
import DoughnutGraph from "./Doughnut";
import base from "../utils/base";
import Header from "./Header";
import Footer from "./Footer";

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeight: null
    }
  }

  componentDidMount() {
    base
    .fetch("users/cYzlSenFtBVM5GYsLZsIf1vSsKr2", {
      context: this,
      asArray: false
    })
    .then(data => {
      console.log("data", data);
      this.setState({
        targetWeight:  data.tagetWeight,
        currentWeight: data.currentWeight //TO DO get latest weight from DB
      })
    });

    console.log("this.state.currentWeight", this.state.currentWeight);
  }

  render() {
    return (
      <div className="summary">
          <Header />
          <DoughnutGraph currentWeight={this.state.currentWeight} />
          {this.state.currentWeight}
          <Footer />
      </div>
    );
  }
}

export default Summary;