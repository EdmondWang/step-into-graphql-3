import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import schemas from './schemas';

const server = new ApolloServer({
    resolvers,
    typeDefs: schemas
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
