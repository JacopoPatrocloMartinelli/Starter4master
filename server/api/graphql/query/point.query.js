const {
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

const { PointType } = require('../types');

module.exports = {
  type: PointType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (root, args) => ({
    id: args.id,
    description: 'Blabla bla',
  }),
};
