import React, { useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddToWaitListButton from './components/AddToWaitListButton'
import ModalContainer from './styles'

const WorkEmailModal = ({ setOpen, email, history }) => {
  const [added, updateAdded] = useState(false)

  return (
    <ModalContainer>
      <DialogTitle>
        {added
          ? 'Waitlist joined'
          : 'Email has not been verified by administration'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {added
            ? 'Thank you for joining the waitlist!'
            : 'Sorry, you do not appear to have been invited to the Grant Circle pilot yet. Would you like to be added to the waitlist?'}
        </DialogContentText>
        <DialogActions>
          <AddToWaitListButton
            setOpen={setOpen}
            email={email}
            history={history}
            updateAdded={updateAdded}
            added={added}
          />
        </DialogActions>
      </DialogContent>
    </ModalContainer>
  )
}

export default WorkEmailModal
