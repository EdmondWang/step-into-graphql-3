import {gql} from 'apollo-server-express';

// ! means non-nullable in graphql

export default gql`
    type Auto {
        name: String
        year: String
    }
    type Query {
        autos: [Auto]
    }
`;
