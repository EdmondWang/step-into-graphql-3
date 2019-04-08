import {gql} from 'apollo-server-express';

// ! means non-nullable in graphql

export default gql`
    type Auto {
        make: String
        model: String
        year: String
    }
    type Query {
        autos: [Auto]
    }
    type Mutation {
        addAuto(make: String!, model: String!, year: String!): Auto!
    }
`;
