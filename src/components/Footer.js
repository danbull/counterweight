import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faChartBar, faUserFriends } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle, faChartBar, faUserFriends);

class Footer extends Component {
  constructor() {
    super();

    this.handleRecordWeightClick = this.handleRecordWeightClick.bind(this);
  }

  handleRecordWeightClick() {
    this.props.handleRecordWeightClick();
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__left">
          <FontAwesomeIcon icon="chart-bar" size="2x"></FontAwesomeIcon>
        </div>
        <div className="footer__middle">
          <button onClick={this.handleRecordWeightClick}>
            <span><FontAwesomeIcon icon="plus-circle" size="2x" /></span>
          </button>
        </div>
        <div className="footer__right">
          <FontAwesomeIcon icon="user-friends" size="2x"></FontAwesomeIcon>
        </div>
      </div>
    );
  }
}

export default Footer;
