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
import WeightResponseCard from "./components/WeightResponseCard";
import { auth, firebaseApp} from "./utils/base";

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
      showResponseCard: false,
      weightChangeState: 0,
      enteredWeight: 0,
      lastTracked: null
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
     .fetch("users/"+auth.currentUser.uid, {
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
      .then(data => {
        this.setState({
          targetWeight: data.tagetWeight,
          currentWeight: data.weighins[data.weighins.length - 1].weight
        })
      });
  }

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
      <div className="App">
        <Header />
        <div className="home">
          <div className="hero">
            { this.state.showResponseCard === true ? (
              <WeightResponseCard weightChangeState={this.state.weightChangeState} closeResponseCard={this.closeResponseCard.bind(this)}/>
            ) : (
              null
            )
            }
            <Link to={"/weight-summary"}>
              <span>Current weight</span>
              <span>{this.state.currentWeight}</span><span className="unit">kg</span>
              <span>Last tracked: {this.state.lastTracked}</span>
              <FontAwesomeIcon icon="chevron-right" size="2x"></FontAwesomeIcon>
            </Link>
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
