import AbstractView from './AbstractView.js';
import Highcharts from 'https://code.highcharts.com/es-modules/masters/highcharts.src.js';
import { TimeSeriesPath } from '/node_modules/time-series-library-js/lib/time-series-path.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Highcharts');
  }

  async getHtml() {
    return `
    <div id="highcharts-container-1"></div>
    <div id="highcharts-container-2"></div>
    `;
  }

  async runScript() {
    const myTimeSeriesPath = new TimeSeriesPath('number', 'linear');
    console.log(myTimeSeriesPath);
    Highcharts.chart('highcharts-container-1', {
      chart: {
        type: 'area',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      plotOptions: {
        series: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        },
      ],
    });
    Highcharts.chart('highcharts-container-2', {
      chart: {
        type: 'area',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      plotOptions: {
        series: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        },
      ],
    });
  }
}
