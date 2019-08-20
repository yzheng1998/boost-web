import gql from 'graphql-tag'

export const VERIFY_PERSONAL = gql`
  mutation verifyPersonalEmail($personalEmail: String!) {
    verifyPersonalEmail(personalEmail: $personalEmail)
  }
`
