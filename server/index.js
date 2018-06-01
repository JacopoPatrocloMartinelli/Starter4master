const express = require('express');
const path = require('path');

const errorHandler = require('./middleware/errorHandler');
const api = require('./api');
const config = require('./config');

const app = express();

// const checkjwt = require('./auth');

app.use('/api', api);

app.use(errorHandler);

// una route per il test
if (config.env !== config.production) {
  app.use('/test', (req, res) => {
    res.status(200).json({
      hello: 'hello',
    });
  });
}

// il fallback è servire i file
app.use('*', express.static(path.resolve('./server/public')));

module.exports = app;
