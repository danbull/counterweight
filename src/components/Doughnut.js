import React from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutGraph extends React.Component {
  render() {
    const data = {
      datasets: [{
          data: [this.props.currentWeight]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Red',
        'Blue'
      ]
  };
  const options = {
    cutoutPercentage: 86
  }
  
    return (
      <div id="chartContainer">
        <div>
          <span>Current weight</span>
          <span>{this.props.currentWeight}</span>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}
export default DoughnutGraph;
