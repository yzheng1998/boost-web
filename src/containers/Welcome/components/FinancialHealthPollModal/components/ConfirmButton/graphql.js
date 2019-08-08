import gql from 'graphql-tag'

const LOG_FIANCIAL_HEALTH = gql`
  mutation logFinancialHealth($financialHealthRating: Int!) {
    logFinancialHealth(financialHealthRating: $financialHealthRating)
  }
`

export default LOG_FIANCIAL_HEALTH
