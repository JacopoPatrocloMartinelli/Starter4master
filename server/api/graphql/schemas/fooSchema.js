const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'fooRoot',
  fields: {
    foo: {
      type: GraphQLString,
      resolve() {
        return 'foo';
      },
    },
  },
});
