const graphqlHTTP = require('express-graphql');
const Router = require('express').Router();

const schema = require('./schema');

Router.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

module.exports = Router;
