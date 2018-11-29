import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import base from "./utils/base";
import RecordWeight from "./components/RecordWeight";
import "./App.css";
import ContentBanner from "./components/WeightResponseCard";
import WeightResponseCard from "./components/WeightResponseCard";

class Weight extends Component {
  constructor() {
    super();

    this.slider = React.createRef();

    this.state = {
      currentSlide: 0,
      chartData: null,
      weighins: null,
      showWeightInput: false,
      showResponseCard: false,
      weightChangeState: 0,
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

  updateWeight(weight) {
    console.log("New weight: ")
    console.log(weight);

    // In reality it should be something like this:
    // delta-time = time-of-last-weight-measurement - time-of-current-weight-measurement (get in hours, between 0 and 24)
    // delta-weight = new weight - last-weight  
    // allowed-weight-fluctuation = delta-time / 24 *  2.5 KG (= maximum normal weight fluctuation) 
    // if (abs(delta-weight) < allowed-weight-fluctuation) {
    //  'nothing to see here' 
    // else {
    // positive or negative weight loss  
    // }

    let delta = weight - this.state.currentWeight;
    let weightChange = 0;

    if (delta > 0.5) {
      weightChange = 1;
    } else if (delta < -0.5) {
      weightChange = -1;
    }

    // This should trigger showing the response card but it doesn't
    this.setState({
      weightChangeState: weightChange,
      showResponseCard: true,
    })

    console.log("Updated weight, should show response card: " + this.state.showResponseCard)
  }

  closeResponseCard() {
    this.setState({
      showResponseCard: false,
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
          targetWeight: data.tagetWeight,
          currentWeight: data.weighins[data.weighins.length - 1].weight
        })
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="progress-status">
          <span>Week 6</span>
        </div>
        <div className="home">
          <div className="hero">
            <Link to={"/weight-summary"}><span></span>Current weight <span className="unit">{this.state.currentWeight}</span></Link>
            <WeightResponseCard weightChangeState={this.state.weightChangeState} show={this.state.showResponseCard} closeResponseCard={this.closeResponseCard.bind(this)}/>
          </div>
        </div>
        <div>
          {this.state.showWeightInput === true ? (
            <RecordWeight currentWeight={this.state.currentWeight} closeRecordOverlay={this.closeRecordOverlay} updateWeight={this.updateWeight.bind(this)} />
          ) :
            null}
        </div>
        <Footer handleRecordWeightClick={this.handleRecordWeightClick} showWeightInput={this.state.showWeightInput} />
      </div>
    );
  }
}

export default Weight;
