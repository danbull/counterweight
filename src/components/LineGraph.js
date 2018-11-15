import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require("highcharts/modules/annotations")(Highcharts);
window['Highcharts'] = Highcharts;


class LineGraph extends React.Component {

    constructor(props) {
        super(props);
        this.setChartInstance = this.setChartInstance.bind(this);

        var targetWeight = 83.5;
        var data = [85.3, 84.2, 84, 83.1, 83.9].map(x => x - targetWeight)

        var options_vertical = {
            legend: {
                enabled: false
            },
            title: null,
            chart: {
                type: 'spline',
                inverted: true,
            },
            tooltip: { enabled: false },
            series: [{
                color: '#000000',
                data: data
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
            annotations: [{
                labels: [{
                    point: {
                        x: 1, y: data[1], 
                        xAxis: 0,
                        yAxis: 0,
                    },
                    text: "Today",
                }],
            }],
        }
        this.state = { options: options_vertical };
    }

    setChartInstance(chart) {
        this.chart = chart;
        var x1a = chart.yAxis[0].toPixels(1);
        var x1b = chart.yAxis[0].toPixels(-2);
        var x2 = chart.xAxis[0].toPixels(0);

        var width = chart.yAxis[0].toPixels(2) - chart.yAxis[0].toPixels(1)
        var height = chart.xAxis[0].toPixels(4) - chart.xAxis[0].toPixels(0)

        //Add 'danger zone'
        this.chart.renderer.rect(x1a, x2, width, height).attr({
            'stroke-width': 2,
            fill: 'rgb(255, 0, 0, 0.5)',
            zIndex: 1
        })
            .add();

        //Add 'danger zone'
        this.chart.renderer.rect(x1b, x2, width, height).attr({
            'stroke-width': 2,
            fill: 'rgb(255, 255, 0, 0.5)',
            zIndex: 1
        })
            .add();
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