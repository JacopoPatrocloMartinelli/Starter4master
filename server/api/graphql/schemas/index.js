const { GraphQLSchema } = require('graphql');
const foo = require('./fooSchema');
const goo = require('./gooSchema');

module.exports = {
  fooSchema: new GraphQLSchema({
    query: foo,
  }),
  gooSchema: new GraphQLSchema({
    query: goo,
  }),
};
