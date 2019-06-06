import gql from 'graphql-tag'

export const GET_USER = gql`
  query viewer {
    viewer {
      user {
        uuid
        requests
      }
      error {
        message
      }
      success
    }
  }
`
