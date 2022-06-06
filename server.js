// import '../../../../node_modules/time-series-library-js/lib/index.js';
// const TimeSeriesPath = require('./node_modules/time-series-library-js/lib/index.js');
// const TimeSeriesPath = import('./node_modules/time-series-library-js/lib/time-series-path.js');

const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());
app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));
app.use('/node_modules', express.static(path.resolve(__dirname, 'node_modules')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 5090, () => console.log('Server running ...'));
