import React from 'react'
import { Mutation } from 'react-apollo'
import LOG_FIANCIAL_HEALTH from './graphql'
import { Button } from '@material-ui/core'

const ConfirmButton = ({ setOpen, financialHealthRating }) => (
  <Mutation mutation={LOG_FIANCIAL_HEALTH}>
    {logFinancialHealth => (
      <Button
        onClick={() => {
          logFinancialHealth({
            variables: { financialHealthRating: Number(financialHealthRating) }
          })
          setOpen(false)
        }}
      >
        Confirm
      </Button>
    )}
  </Mutation>
)

export default ConfirmButton
