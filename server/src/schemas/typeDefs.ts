const typeDefs = `
    type Contact {
        name: String!
        email: String!
        message: String!
    }

    type Query {
        _empty: String
    }

    type Mutation {
        createContact(name: String!, email: String!, message: String!): Contact
    }
`;

export default typeDefs;