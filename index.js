// Use a logging service instead of console
const pino = require('pino')({ name: 'main', prettyPrint: true });
const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/');
const { MONGODB } = require('./config.js');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        pino.info('MongoDB connected');
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        pino.info(`Server running at ${res.url}`);
    })
    // Always handle something going wrong
    .catch((err) => {
        pino.error(err, 'Error starting application');
        process.exit(1);
    });
