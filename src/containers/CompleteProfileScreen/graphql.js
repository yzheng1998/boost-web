import gql from 'graphql-tag'

export const REGISTER_USER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      user {
        uuid
      }
      token
      error {
        message
      }
    }
  }
`

export const GET_ACCESS_TOKEN = gql`
  mutation getAccessTokens($plaidPublicTokens: [String!]) {
    getAccessTokens(plaidPublicTokens: $plaidPublicTokens) {
      uuid
    }
  }
`
