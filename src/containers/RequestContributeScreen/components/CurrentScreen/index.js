import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { GET_USER } from './graphql'
import LoadingIcon from '../../../../components/LoadingIcon'
import RequestScreen from './components/RequestScreen'
import ContributeScreen from './components/ContributeScreen'

const REQUEST_SCREEN = 0
const CONTRIBUTE_SCREEN = 1

const CurrentScreen = ({ tab, setState, history }) => {
  const [contributions, updateContributions] = useState(0)
  const [requests, updateRequests] = useState(0)
  const [payPalEmail, updatePayPalEmail] = useState('')

  const state = { contributions, requests, payPalEmail }

  const handleError = ({ message }) => {
    console.error(message)
    return 'An error occurred!'
  }

  const computeBalance = user =>
    (1000 - user.requests + user.contributions).toFixed(2)

  return (
    <Query
      query={GET_USER}
      onCompleted={data => {
        updateContributions(data.viewer.user.contributions)
        updateRequests(data.viewer.user.requests)
        updatePayPalEmail(data.viewer.user.personalEmail)
      }}
    >
      {({ loading, data, error }) => {
        if (loading) return <LoadingIcon />
        if (error) {
          handleError(error)
        }
        const { user } = data.viewer

        const balance = computeBalance(user)

        // If the tab value is set to REQUEST_SCREEN, render RequestScreen
        if (tab === REQUEST_SCREEN) {
          return (
            <RequestScreen data={state} balance={balance} history={history} />
          )

          // If the tab value is set to CONTRIBUTE_SCREEN, render ContributeScreen
        } else if (tab === CONTRIBUTE_SCREEN) {
          return <ContributeScreen />
        }

        // Otherwise, page is loading for the first time (tab value of LOADING) and
        // we render the initial screen based on user's balance
        if (balance === '1000.00') {
          setState({ tab: REQUEST_SCREEN })
          return (
            <RequestScreen data={state} balance={balance} history={history} />
          )
        }
        setState({ tab: CONTRIBUTE_SCREEN })
        return <ContributeScreen />
      }}
    </Query>
  )
}

export default CurrentScreen
