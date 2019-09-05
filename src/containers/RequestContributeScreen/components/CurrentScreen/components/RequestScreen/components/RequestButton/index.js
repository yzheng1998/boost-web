import React, { useState, forwardRef } from 'react'
import { Mutation } from 'react-apollo'
import { Dialog } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import ReactGA from 'react-ga'
import { REQUEST_FUNDS, GET_USER } from './graphql'
import RequestSubmittedModal from '../RequestSubmittedModal'
import RequestDocumentsModal from '../RequestDocumentsModal'
import PrimaryButton from '../../../../../../../../components/PrimaryButton'
import LoadingIcon from '../../../../../../../../components/LoadingIcon'
import theme from '../../../../../../../../theme'
import config from '../../../../../../../../config'

ReactGA.initialize(config.gaTrackingCode)

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
))

const RequestButton = ({
  alert,
  state,
  handleSubmit,
  handleSuccess,
  disabled,
  setState
}) => {
  const [openSuccess, setOpenSuccess] = useState(false)

  const {
    contributions,
    requests,
    amount,
    selectedBoostReasons,
    otherReason,
    selectedEvents,
    otherEvent,
    eventsExplanation,
    payPalEmail,
    documents,
    openPDF
  } = state
  return (
    <Mutation
      mutation={REQUEST_FUNDS}
      onCompleted={data => {
        if (data.request.success) {
          setOpenSuccess(true)
        } else alert.error(data.request.error.message)
      }}
      refetchQueries={[{ query: GET_USER }]}
    >
      {(request, { loading }) => {
        const variables = {
          input: {
            contributions,
            requests,
            amount: Number(amount),
            reason: selectedBoostReasons.concat([otherReason]).join(', '),
            events: selectedEvents.concat([otherEvent]).join(', '),
            eventsExplanation,
            payPalEmail,
            documents
          }
        }
        return (
          <>
            <PrimaryButton
              text={loading ? <LoadingIcon /> : 'Request funds with Paypal'}
              style={{
                width: 350,
                backgroundColor:
                  loading || disabled
                    ? theme.colors.secondary
                    : theme.colors.tertiary,
                color: 'white',
                marginTop: 15,
                marginBottom: 45
              }}
              onClick={() => {
                ReactGA.event({
                  category: 'Requests',
                  action: 'Request Made'
                })
                handleSubmit(() => request({ variables }))
              }}
              disabled={disabled || loading}
            />
            <Dialog
              open={openPDF}
              onClose={() => setState({ openPDF: false })}
              TransitionComponent={Transition}
            >
              <RequestDocumentsModal
                setOpen={setState}
                request={() => request({ variables })}
              />
            </Dialog>
            <Dialog
              open={openSuccess}
              onClose={() => setOpenSuccess(false)}
              TransitionComponent={Transition}
            >
              <RequestSubmittedModal handleSuccess={handleSuccess} />
            </Dialog>
          </>
        )
      }}
    </Mutation>
  )
}

export default RequestButton
