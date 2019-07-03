import gql from 'graphql-tag'

export const GET_USER = gql`
  query viewer {
    viewer {
      user {
        uuid
        requests
        lastRequest
      }
      error {
        message
      }
      success
    }
  }
`
export const PAYMENT = gql`
  mutation payment($input: PaymentInput!) {
    payment(input: $input) {
      error {
        message
      }
      success
    }
  }
`
