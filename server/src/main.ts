import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express from 'express';
import mongo from './mongo';
import resolvers from './resolvers';
import schemas from './schemas';

const PORT = 3000;
const app = express();

const server = new ApolloServer({
    resolvers,
    typeDefs: schemas
});

server.applyMiddleware({ app, path: '/graphql' });

mongo.then((db) => {
    console.log('mongodb connected');
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Express Server ready at http://localhost:${PORT}`);
        console.log(`Graphql is ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
})
.catch((err) => {
    console.log(err);
});

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
