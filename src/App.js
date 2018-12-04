import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import base from "./utils/base";
import RecordWeight from "./components/RecordWeight";
import "./App.css";

library.add(faChevronRight);

class Weight extends Component {
  constructor() {
    super();

    this.slider = React.createRef();

    this.state = {
      currentSlide: 0,
      chartData: null,
      weighins: null,
      showWeightInput: false,
      lastTracked: null
    };

    this.handleRecordWeightClick = this.handleRecordWeightClick.bind(this);
    this.closeRecordOverlay = this.closeRecordOverlay.bind(this);
  }

  handleRecordWeightClick() {
    this.setState({
      showWeightInput: true
    });
  }

  closeRecordOverlay() {
    this.setState({
      showWeightInput: false
    })
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
        currentWeight: data.weighins[data.weighins.length -1].weight,
        lastTracked: data.weighins[data.weighins.length -1].date
      })
    });
  }
 
  render() {
    return (
      <div className="App"> 
        <Header />
        <div className="home">
          <div className="hero">
            <Link to={"/weight-summary"}>
              <span>Current weight</span>
              <span>{this.state.currentWeight}</span><span className="unit">kg</span>
              <span>Last tracked: {this.state.lastTracked}</span>
              <FontAwesomeIcon icon="chevron-right" size="2x"></FontAwesomeIcon>
            </Link>
          </div>
        </div>
        <div>
        { this.state.showWeightInput === true ? (
            <RecordWeight currentWeight={this.state.currentWeight} closeRecordOverlay={this.closeRecordOverlay} />
          ) : 
          null }
        </div>
        <Footer handleRecordWeightClick={this.handleRecordWeightClick} showWeightInput={this.state.showWeightInput}  />
      </div>
    );
  }
}

export default Weight;
