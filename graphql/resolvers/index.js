const PostResolvers = require('./posts');
const userResolvers = require('./users');

module.exports = {
    Query: {
        ...PostResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
};