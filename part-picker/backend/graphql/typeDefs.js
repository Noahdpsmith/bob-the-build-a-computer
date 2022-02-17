import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    builds: [Build]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Build {
    _id: ID
    name: String
    user: User
    part: Part
  }

  type Part {
    _id: ID
    name: String
    type: String
    link: String
  }

  type Query {
    builds: [Build]
    parts: [Part]
  }

  type Mutation {
    login(name: String!): Auth
  }
`;

export default typeDefs;