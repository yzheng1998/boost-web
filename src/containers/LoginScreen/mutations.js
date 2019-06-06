import gql from 'graphql-tag'

export const LOGIN_USER = gql`
  mutation loginUser($personalEmail: String!, $password: String!) {
    loginUser(personalEmail: $personalEmail, password: $password) {
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
