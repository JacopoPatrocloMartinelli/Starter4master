const express = require('express');

const errorHandler = require('./middleware/errorHandler');
const api = require('./api');
const config = require('./config');

const app = express();

// const checkjwt = require('./auth');

app.use('/api', api);

app.use(errorHandler);

if (config.env !== config.production) {
  app.use('/test', (req, res) => {
    res.status(200).json({
      hello: 'hello',
    });
  });
}

module.exports = app;
