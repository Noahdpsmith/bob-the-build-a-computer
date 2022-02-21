import { gql } from '@apollo/client';

export const QUERY_PARTS = gql`
  query Parts {
    parts {
      _id
      name
      type
      link
    }
}
`;

export const QUERY_BUILDS = gql`
  query Builds {
    builds {
      name
      user
      parts
    }
}
`;