import React from 'react'
import { Mutation } from 'react-apollo'
import { useAlert } from 'react-alert'
import PrimaryButton from '../../../../../../components/PrimaryButton'
import { ADD_TO_WAIT_LIST } from './graphql'
import theme from '../../../../../../theme'

const AddToWaitListButton = ({
  email,
  setOpen,
  history,
  updateAdded,
  added
}) => {
  const alert = useAlert()

  const handleClose = () => {
    setOpen(false)
    alert.success('Email successfully added to wait list')
    history.push('/login')
  }

  return (
    <Mutation
      mutation={ADD_TO_WAIT_LIST}
      onCompleted={() => {
        updateAdded(true)
      }}
      onError={() => {
        alert.error('Failed to add email to waitlist')
        setOpen(false)
      }}
    >
      {(addToWaitList, { loading }) => (
        <PrimaryButton
          text={added ? 'Ok' : 'Add to waitlist'}
          disabled={loading}
          onClick={() =>
            added ? handleClose() : addToWaitList({ variables: { email } })
          }
          style={{
            backgroundColor: theme.colors.tertiary,
            marginRight: 15
          }}
        />
      )}
    </Mutation>
  )
}

export default AddToWaitListButton
