import {gql} from 'apollo-server-express';

// ! means non-nullable in graphql

export default gql`
    type Auto {
        make: String
        model: String
        year: String
        width: Int
        height: Int
        length: Int
    }
    type Query {
        autos: [Auto]
    }
    type Mutation {
        addAuto(make: String!): Auto!
    }
`;
