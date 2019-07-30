import React from 'react'
import { Mutation } from 'react-apollo'
import { useAlert } from 'react-alert'
import PrimaryButton from '../../../../../../components/PrimaryButton'
import { ADD_TO_WAIT_LIST } from './graphql'
import LoadingIcon from '../../../../../../components/LoadingIcon'
import theme from '../../../../../../theme'

const AddToWaitListButton = ({ email, setOpen }) => {
  const alert = useAlert()

  return (
    <Mutation
      mutation={ADD_TO_WAIT_LIST}
      onCompleted={() => {
        setOpen(false)
        alert.success('Email successfully added to wait list')
      }}
      onError={() => {
        alert.error('Failed to add email to waitlist')
        setOpen(false)
      }}
    >
      {(addToWaitList, { loading }) => (
        <PrimaryButton
          text={loading ? <LoadingIcon /> : 'Add to waitlist'}
          disabled={loading}
          onClick={() => addToWaitList({ variables: { email } })}
          style={{ backgroundColor: theme.colors.tertiary }}
        />
      )}
    </Mutation>
  )
}

export default AddToWaitListButton
