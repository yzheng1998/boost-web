import gql from 'graphql-tag'

export const REQUEST_FUNDS = gql`
  mutation request($input: RequestInput!) {
    request(input: $input) {
      success
      error {
        message
      }
    }
  }
`

export const GET_USER = gql`
  query viewer {
    viewer {
      user {
        uuid
        contributions
        requests
        personalEmail
      }
      error {
        message
      }
      success
    }
  }
`
