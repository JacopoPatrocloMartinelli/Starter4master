const {
  GraphQLList,
} = require('graphql');
const { PointType } = require('../types');

module.exports = {
  type: GraphQLList(PointType),
  resolve: () => ([
    {
      id: 'wefwnef2342',
      description: 'bla bla bla',
    },
    {
      id: 'sdsfsdfòlskdfisp9',
      description: 'blablabla bla',
    },
  ]),
};
