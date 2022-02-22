import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
   _id: ID
    username: String
    email: String
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
    users: [User]
  }

  type Mutation {
    login(name: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBuild(name: String!, user: String!, part: String!): Build
    addPart(name: String!, type: String!, link: String!): Part
  }
`;

export default typeDefs;