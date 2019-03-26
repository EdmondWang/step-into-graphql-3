import { ApolloServer } from 'apollo-server';

import bookResolver from './resolvers/bookResolver';
import bookSchema from './schemas/bookSchema';

const server = new ApolloServer({
    resolvers: bookResolver,
    typeDefs: bookSchema
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
