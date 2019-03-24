import {gql} from 'graphql';

export default gql `
    type Query {
        """
        Test Message.
        """
        testMessage: String!
    }
`;