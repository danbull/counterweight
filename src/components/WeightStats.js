import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Editorial from "./Editorial";
import Siema from "siema";
import data from "../data";
import LineGraph from "./LineGraph";
import base from "../utils/base";
import "../App.css";

class WeightStats extends Component {
  constructor() {
    super();

    this.slider = React.createRef();

    this.state = {
      currentSlide: 0,
      chartData: null,
      weighins: null
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

    base
      .fetch("users/cYzlSenFtBVM5GYsLZsIf1vSsKr2", {
        context: this,
        asArray: false
      })
      .then(data => {
        const weighins = data.weighins
          .map(weighin => parseInt(weighin.weight))
          .slice(Math.max(data.weighins.length - 6, 0));

        const dates = data.weighins
        .map(weighin => weighin.date)
        .slice(Math.max(data.weighins.length - 6, 0));
          
        const targetWeight = data.targetWeight;

        this.setState({
          targetWeight,
          weighins,
          data: {
            labels: dates,
            type: 'line',
            datasets: [
              {
                label: "Weigh-ins",

                fill: false,
                backgroundColor: "rgb(75,192,192)",
                borderColor: "rgb(75,192,192)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                cubicInterpolationMode: "monotone",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: weighins,
              },
              {
                label: "Target weight",
                fill: false,
                backgroundColor: "rgb(223, 51, 51)",
                borderColor: "rgb(223, 51, 51)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                cubicInterpolationMode: "monotone",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [targetWeight, targetWeight, targetWeight, targetWeight, targetWeight, targetWeight],
              }
            ]
          }
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="toggle-buttons">
          <Link to={"/stats"} />
        </div>
        <main>
          {this.state.weighins !== null ? (
            <LineGraph
            weighins={this.state.weighins}
            data={this.state.data}
            targetWeight={this.state.targetWeight}
              />
          ) : (
            "Loading data"
          )}
          <div className="slider-wrapper">
            <div className="slider" ref={this.slider}>
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default WeightStats;
