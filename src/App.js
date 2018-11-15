import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Editorial from "./components/Editorial";
import Siema from "siema";
import data from "./data";
import LineGraph from "./components/LineGraph";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.slider = React.createRef();

    this.state = {
      currentSlide: 0
    };
  }

  componentDidMount() {
    const slider = this.slider.current;

    const siema = new Siema({
      selector: slider,
      onChange: () => {
        this.setState({
          currentSlide: siema.currentSlide
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <LineGraph />
          <div className="slider-wrapper">
            <div className="slider" ref={this.slider}>
              <div id="slider" ref={this.slider}>
                {data.editorial.map(article => {
                  return (
                    <Editorial
                      headline={article.headline}
                      image={article.image}
                      link={article.link}
                      whyshow={article.whyshow}
                    />
                  );
                })}
              </div>
              <div className="slider-pagination">
                {data.editorial.map((article, index) => {
                  console.log(
                    "this.state.currentSlide",
                    this.state.currentSlide
                  );
                  return (
                    <span
                      className={
                        this.state.currentSlide === index ? "active" : ""
                      }
                    >
                      <span className="sr-only">{index}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
