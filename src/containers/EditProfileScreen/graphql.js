import gql from 'graphql-tag'

export const GET_USER = gql`
  query viewer {
    viewer {
      user {
        uuid
        workEmail
        personalEmail
        firstName
        lastName
        emailIsConfirmed
        spendingVsIncome
        billsPaidOnTime
        canCoverExpenses
        confidenceInLongTermGoals
        levelOfDebt
        selfReportedCreditScore
        confidenceInInsurance
        plansAhead
      }
      error {
        message
      }
      success
    }
  }
`

export const EDIT_PROFILE = gql`
  mutation editProfile($input: EditProfileInput!) {
    editProfile(input: $input) {
      user {
        uuid
      }
      error {
        message
      }
    }
  }
`
