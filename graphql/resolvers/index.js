const PostResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
    Query: {
        ...PostResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...PostResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
};