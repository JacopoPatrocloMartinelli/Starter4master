const graphqlHTTP = require('express-graphql');
const Schema = require('./schemas');
const Router = require('express').Router();

const fooGrapQlMidd = graphqlHTTP({
  schema: Schema.fooSchema,
  graphiql: true,
});

const gooGrapQlMidd = graphqlHTTP({
  schema: Schema.gooSchema,
  graphiql: true,
});

Router.use('/foo', fooGrapQlMidd);

Router.use('/goo', gooGrapQlMidd);

module.exports = Router;

