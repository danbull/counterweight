import React from "react";
import { Line } from "react-chartjs-2";

class LineGraph extends React.Component {
  render() {
    console.log("this.props.targetWeight", this.props.targetWeight);
    const axisPad = 1;
    const weighins = this.props.data.datasets[0].data;
    const maxVal = weighins.reduce((a, b) => Math.max(a, b));
    const minVal = this.props.targetWeight - 2;
    const upperRange = this.props.targetWeight + 2;
    const lowerRange = this.props.targetWeight - 2;

    console.log("upperRange", upperRange);
    console.log("lowerRange", lowerRange);

    this.props.data.datasets[2] = {
      label: "hideLabel",
      fill: false,
      backgroundColor: "rgb(223, 51, 51)",
      borderColor: "#afafaf",
      borderCapStyle: "butt",
      borderDash: [10, 5],
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
      data: [upperRange, upperRange, upperRange, upperRange, upperRange, upperRange],
    };

    this.props.data.datasets[3] = {
      label: "Healthy range",
      fill: false,
      backgroundColor: "transparent",
      borderColor: "#afafaf",
      borderCapStyle: "butt",
      borderDash: [10, 5],
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
      data: [lowerRange, lowerRange, lowerRange, lowerRange, lowerRange, lowerRange],
    };

    const options = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Weight in Kg"
            },
            display: true,
            ticks: {
              suggestedMin: minVal - axisPad,
              suggestedMax: maxVal + axisPad,
            }
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Weight in Kg"
            },
          }
        ]
      },
      legend: {
      labels: {
        filter: function(item, chart) {
          // Logic to remove a particular legend item goes here
          return !item.text.includes('hideLabel');
        }
      }
    }
    };

    return (
      <div id="chartContainer">
        <Line data={this.props.data} options={options} />
      </div>
    );
  }
}
export default LineGraph;
