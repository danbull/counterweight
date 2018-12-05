import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faUser, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faBell, faUser, faPlusCircle);

class Header extends Component {
  render() {
    return (
      <header className="header">
      <div className="header__title">
      <Link to="/">
        Counterweight
      </Link>
      </div>
      <div className="header__user-summary">
        <span>Week <span>9</span></span>
        <span className="header__phase">
          Food reintroduction
        </span>
      </div>

      </header>
    );
  }
}

export default Header;