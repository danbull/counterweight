import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import base from "./utils/base";
import RecordWeight from "./components/RecordWeight";
import "./App.css";
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
      enteredWeight: 0
    };

    this.handleRecordWeightClick = this.handleRecordWeightClick.bind(this);
    this.closeRecordOverlay = this.closeRecordOverlay.bind(this);
  }

  updateWeight() {
    // In reality it should be something like this:
    // delta-time = time-of-last-weight-measurement - time-of-current-weight-measurement (get in hours, between 0 and 24)
    // delta-weight = new weight - last-weight  
    // allowed-weight-fluctuation = delta-time / 24 *  2.5 KG (= maximum normal weight fluctuation) 
    // if (abs(delta-weight) < allowed-weight-fluctuation) {
    //  'nothing to see here' 
    // else {
    // positive or negative weight loss  
    // }

    this.setState({
      showWeightInput: false
    })

    const delta = this.state.enteredWeight - this.state.currentWeight;
    let weightChange = 0;

    if (delta > 0.5) {
      weightChange = 1;
    } else if (delta < -0.5) {
      weightChange = -1;
    }
    console.log("weightChange", weightChange);

    this.setState({
      weightChangeState: weightChange,
      showResponseCard: true
    })
  }


  handleWeightChange(event) {
    this.setState({enteredWeight: event.target.value})
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

  closeResponseCard() {
    console.log("closeResponseCard");
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
            { this.state.showResponseCard === true ? (
              <WeightResponseCard weightChangeState={this.state.weightChangeState} closeResponseCard={this.closeResponseCard.bind(this)}/>
            ) : (
              null
            )
            }
          </div>
        </div>
        <div>
          {this.state.showWeightInput === true ? (
            <RecordWeight handleWeightChange={this.handleWeightChange.bind(this)} currentWeight={this.state.currentWeight} closeRecordOverlay={this.closeRecordOverlay.bind(this)} updateWeight={this.updateWeight.bind(this)} />
          ) :
            null}
        </div>
        <Footer handleRecordWeightClick={this.handleRecordWeightClick} showWeightInput={this.state.showWeightInput} />
      </div>
    );
  }
}

export default Weight;
