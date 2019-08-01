import React from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ModalContainer from './styles'
import { Button } from '@material-ui/core'

const RequestDocumentsModal = ({ setOpen, request }) => (
  <ModalContainer>
    <DialogTitle>Add Supporting Documents</DialogTitle>
    <DialogContent>
      <DialogContentText>
        While not necessary, it is highly recommended supporting documents are
        included in the request form. These documents play a major role in
        deciding whether requests are approved or rejected.
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => request()}>Procceed with Request</Button>
      </DialogActions>
    </DialogContent>
  </ModalContainer>
)

export default RequestDocumentsModal
