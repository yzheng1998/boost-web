import gql from 'graphql-tag'

export const ADD_TO_WAIT_LIST = gql`
  mutation addToWaitList($email: String!) {
    addToWaitList(email: $email) {
      success
      error {
        message
      }
    }
  }
`
