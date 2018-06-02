const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const { PointType } = require('../types');

module.exports = {
  type: PointType,
  args: {
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, args) =>
    ({
      id: '2342l3nd2k3e',
      description: args.description,
    }),
};
