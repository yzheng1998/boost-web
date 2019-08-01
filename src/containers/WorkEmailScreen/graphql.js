import gql from 'graphql-tag'

export const VERIFY_WORK = gql`
  mutation verifyWorkEmail($workEmail: String!) {
    verifyWorkEmail(workEmail: $workEmail) {
      notListed
      error {
        message
      }
    }
  }
`
