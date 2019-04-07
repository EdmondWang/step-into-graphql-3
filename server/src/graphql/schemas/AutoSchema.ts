import {gql} from 'apollo-server-express';

// ! means non-nullable in graphql

export default gql`
    type Movie {
        name: String
        year: String
    }
    type Query {
        movies: [Movie]
    }
`;
