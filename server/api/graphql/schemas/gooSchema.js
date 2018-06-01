const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'gooRoot',
  fields: {
    goo: {
      type: GraphQLString,
      resolve() {
        return 'goo';
      },
    },
  },
});
