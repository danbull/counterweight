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
      <div className="header__notifications">
      <Link to="/">
        <FontAwesomeIcon icon="bell" size="2x" />
      </Link>
      </div>
      <div className="header__title">
        <span>Counterweight</span>
      </div>
      <div className="header__user">
      <Link to="/">
        <FontAwesomeIcon icon="user" size="2x" />
      </Link>
      </div>

      </header>
    );
  }
}

export default Header;