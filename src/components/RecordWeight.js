import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

library.add(faCalendar);

class RecordWeight extends Component {
  render() {
    console.log("this.");
    return (
      <div className="overlay pa3">
        <div>
          <h2>Record</h2>
        </div>
        <div className="form-group center pa3 hidden ba mv3">
          <div className="form-input">
            <input className="data-input" type="number" />
            <span className="input-units">kg</span>
          </div>
            <div>
              <div>
                <span className="input-label">Weight</span>
              </div>
              <button className="button button--tiny">Today</button>
              <button className="button button--tiny button--icon"><FontAwesomeIcon icon="calendar" size="2x"></FontAwesomeIcon></button>
            </div>
        </div>
        <div className="form-group center pa3 hidden ba mv3">
          <p>How motivated are you feeling?</p>
          <div className="range-slider">
            <input type="range"/>
            <div className="range-slider__labels">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </div>
        <div className="tc mv4">
          <button className="button">Add Entry</button>
        </div>
        <div className="overlay__footer pa3 tc">
          <button onClick={this.props.closeRecordOverlay} className="button button--icon">×</button>
        </div>
      </div>
    );
  }
}

export default RecordWeight;