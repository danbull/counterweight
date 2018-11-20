import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class Weight extends Component {
  constructor() {
    super();

    this.slider = React.createRef();

    this.state = {
      currentSlide: 0,
      chartData: null,
      weighins: null
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="home">
          <Link to={"/weight-summary"}>Weight summary</Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Weight;
