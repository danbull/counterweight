import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

window['Highcharts'] = Highcharts;


class LineGraph extends React.Component {

    constructor(props) {
        super(props);
        this.setChartInstance = this.setChartInstance.bind(this);

        var targetWeight = 83.5;

        var options_vertical = {
            legend: {
                enabled: false
            },
            title: null,
            chart: {
                type: 'spline',
                inverted: true,
            },
            series: [{
                data: [85.3, 84.2, 84, 83.1, 83.9].map(x => x - targetWeight)
            }],
            xAxis: {
                visible: false,
            },
            yAxis: {
                title: false,
                min: -2,
                max: 2,
                tickPositions: [-2, -1, 0, 1, 2],
                endOnTick: true
            },
        }

        this.state = { options: options_vertical };

    }

    setChartInstance(chart) {
        this.chart = chart;
    }

    render() {
        return (
            <div id="chartContainer">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.options}
                    ref={'chart'}
                    callback={this.setChartInstance}
                />
            </div>
        );
    }
}
export default LineGraph;