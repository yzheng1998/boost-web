import React from 'react'
import { Typography } from '@material-ui/core'
import { ReasonsToRequestContainer, ReasonsTable } from './styles'
import ReasonsTableColumn from './components/ReasonsTableColumn'
import { ReasonsColumnOne, ReasonsColumnTwo } from './constants'

const ReasonsToRequest = () => (
  <ReasonsToRequestContainer>
    <Typography style={{ marginBottom: 20 }}>
      We understand that your financial life is complicated, especially when
      something unexpected happens. For that reason, Grant Circle funds may be
      requested to help deal with a range of situations including:
    </Typography>
    <ReasonsTable>
      <ReasonsTableColumn
        header="Needs arising, and causing financial hardship, due to situations like:"
        reasons={ReasonsColumnOne}
      />
      <ReasonsTableColumn
        header="Funds needed for expenses such as: "
        reasons={ReasonsColumnTwo}
      />
    </ReasonsTable>
    <Typography>
      Please note that other uses and reasons for financial hardship may also be
      eligible for support. The online request form contains space to provide
      details about your specific situation. You may only submit one request per
      financial hardship.
    </Typography>
  </ReasonsToRequestContainer>
)

export default ReasonsToRequest
