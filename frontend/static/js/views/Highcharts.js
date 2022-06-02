import AbstractView from './AbstractView.js';
import Highcharts from 'https://code.highcharts.com/es-modules/masters/highcharts.src.js';
import { TimeSeriesPath } from '/node_modules/time-series-library-js/lib/index.js';
import { StatusType } from '/node_modules/time-series-library-js/lib/status-type.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Highcharts');
  }

  async getHtml() {
    return `
    <div id="highcharts-container-1"></div>
    <div id="highcharts-container-2"></div>
    <div id="highcharts-container-3"></div>
    <div id="highcharts-container-4"></div>
    <div id="highcharts-container-5"></div>
    <div id="highcharts-container-6"></div>
    <div id="highcharts-container-7"></div>
    <div id="highcharts-container-8"></div>
    `;
  }

  async runScript() {
    // Generate some test data, this typically comes from a web service
    const stream1 = new TimeSeriesPath('number', 'linear');
    console.log(stream1);
    let timeEntries1 = [
      { t: new Date('2021-02-02 00:00:00.000+00'), v: 100, s: StatusType.Good },
      { t: new Date('2021-02-02 10:06:01.000+00'), v: 151, s: StatusType.Good },
      { t: new Date('2021-02-03 00:00:02.000+00'), v: 90, s: StatusType.Good },
      { t: new Date('2021-02-06 00:01:03.000+00'), v: 125, s: StatusType.Good },
      { t: new Date('2021-02-08 00:00:04.000+00'), v: 103, s: StatusType.Good },
      { t: new Date('2021-02-08 00:00:05.000+00'), v: 4, s: StatusType.Good },
      { t: new Date('2021-02-08 16:00:06.000+00'), v: 207, s: StatusType.Good },
      { t: new Date('2021-02-09 00:00:07.000+00'), v: 108, s: StatusType.Good },
    ];
    stream1.setTimeEntries(timeEntries1);

    const stream2 = new TimeSeriesPath('number', 'linear');
    let timeEntries2 = [
      { t: new Date('2021-02-02 00:00:00.000+00'), v: 50, s: StatusType.Good },
      { t: new Date('2021-02-02 15:08:01.000+00'), v: 251, s: StatusType.Good },
      { t: new Date('2021-02-03 00:04:02.000+00'), v: 190, s: StatusType.Good },
      { t: new Date('2021-02-05 01:01:03.000+00'), v: 165, s: StatusType.Good },
      { t: new Date('2021-02-08 01:00:04.000+00'), v: 203, s: StatusType.Good },
      { t: new Date('2021-02-08 03:00:05.000+00'), v: 104, s: StatusType.Good },
      { t: new Date('2021-02-08 23:00:06.000+00'), v: 7, s: StatusType.Good },
      { t: new Date('2021-02-09 03:00:07.000+00'), v: 158, s: StatusType.Good },
    ];
    stream2.setTimeEntries(timeEntries2);

    const stream3 = stream1.add(stream2);

    Highcharts.chart('highcharts-container-1', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Stream 1',
        align: 'left',
        x: 70,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {},
      },
      series: [
        {
          data: stream1.getTimeEntries().map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
    });

    Highcharts.chart('highcharts-container-2', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Stream 2',
        align: 'left',
        x: 70,
      },
      yAxis: {
        title: { text: 'doodles/s' },
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {},
      },
      series: [
        {
          data: stream2.getTimeEntries().map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
    });

    Highcharts.chart('highcharts-container-3', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Stream 3 = Stream 1 + Stream 2',
        align: 'left',
        x: 70,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {
          // fillOpacity: 0.5,
        },
      },
      series: [
        {
          data: stream3.getTimeEntries().map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
    });

    Highcharts.chart('highcharts-container-4', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Stream 1 * Stream 2',
        align: 'left',
        x: 70,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          data: stream1
            .multiply(stream2)
            .getTimeEntries()
            .map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
    });

    Highcharts.chart('highcharts-container-5', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Stream 1 / Stream 2',
        align: 'left',
        x: 70,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          data: stream1
            .divide(stream2)
            .getTimeEntries()
            .map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
    });

    Highcharts.chart('highcharts-container-6', {
      chart: {
        type: 'line',
      },
      title: {
        text: '(Stream 1 - Stream 2) * Stream 3',
        align: 'left',
        x: 70,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          data: stream1
            .subtract(stream2)
            .multiply(stream3)
            .getTimeEntries()
            .map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
    });

    Highcharts.chart('highcharts-container-7', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Stream 1 resampled to Stream 2',
        align: 'left',
        x: 70,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          data: stream1
            .resample(stream2.timestamps)
            .getTimeEntries()
            .map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
    });

    Highcharts.chart('highcharts-container-8', {
      // chart: {
      //   type: 'line',
      // },
      title: {
        text: 'Multi-line',
        align: 'left',
        x: 70,
      },
      xAxis: {
        type: 'datetime',
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },
      series: [
        {
          name: 'Stream 1',
          data: stream1.getTimeEntries().map((entry) => [entry.t.valueOf(), entry.v]),
        },
        {
          name: 'Stream 2',
          data: stream2.getTimeEntries().map((entry) => [entry.t.valueOf(), entry.v]),
        },
        {
          name: 'Stream 3 = Stream 1 + Stream 2',
          data: stream3.getTimeEntries().map((entry) => [entry.t.valueOf(), entry.v]),
        },
        {
          name: 'Stream 1 / Stream 2',
          data: stream1
            .divide(stream2)
            .getTimeEntries()
            .map((entry) => [entry.t.valueOf(), entry.v]),
        },
        {
          name: 'Stream 1 resampled to Stream 2',
          data: stream1
            .resample(stream2.timestamps)
            .getTimeEntries()
            .map((entry) => [entry.t.valueOf(), entry.v]),
        },
      ],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
    });
  }
}
