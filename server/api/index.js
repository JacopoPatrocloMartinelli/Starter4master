const api = require('express').Router();
const graphql = require('./graphql');
const rest = require('./rest');

api.use('/grql', graphql);

api.use('/rest', rest);

module.exports = api;
