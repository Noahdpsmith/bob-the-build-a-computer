import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BUILD = gql`
mutation Mutation($name: String!, $user: String!, $part: String!) {
  addBuild(name: $name, user: $user, part: $part) {
    name
    user {
      username
    }
    part {
      name
      type
      link
    }
  }
}
`;

// export const PARTS_MUTATION = gql`
