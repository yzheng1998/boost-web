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
        You have not included any documentation. If your documentation is
        available, please add it now. If you need more time to assemble
        documents, you can submit your request and add documentation later in
        the My Activity page. However, please note that review and processing of
        your request may be delayed.
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => request()}>Procceed with Request</Button>
      </DialogActions>
    </DialogContent>
  </ModalContainer>
)

export default RequestDocumentsModal
