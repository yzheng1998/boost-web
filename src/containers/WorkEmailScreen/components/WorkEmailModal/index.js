import React from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddToWaitListButton from './components/AddToWaitListButton'
import ModalContainer from './styles'

const WorkEmailModal = ({ setOpen, email }) => (
  <ModalContainer>
    <DialogTitle>Email has not been verified by administration</DialogTitle>
    <DialogContent>
      <DialogContentText>
        The email
        <b>
          <i>{` ${email} `}</i>
        </b>
        has not yet been approved by GreenPath Grant Circle. If you would like
        to be approved, please add your email to the waitlist.
      </DialogContentText>
      <DialogActions>
        <AddToWaitListButton setOpen={setOpen} email={email} />
      </DialogActions>
    </DialogContent>
  </ModalContainer>
)

export default WorkEmailModal
