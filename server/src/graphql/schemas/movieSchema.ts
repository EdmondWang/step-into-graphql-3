import {gql} from 'apollo-server-express';

// ! means non-nullable in graphql

export default gql`
    type Movie {
        name: string
        year: string
    }
    type Query {
        movies: [Movie]
    }
`;
