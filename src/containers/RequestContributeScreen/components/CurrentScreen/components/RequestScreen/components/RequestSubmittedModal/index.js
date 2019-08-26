import React from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ModalContainer from './styles'
import { Button } from '@material-ui/core'

const RequestSubmittedModal = ({ handleSuccess }) => (
  <ModalContainer>
    <DialogTitle>Your request has been submitted!</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Thank you for submitting your request. You will hear from us within 1-2
        days. If you need to view or add documents to your request, you can do
        so by visiting the My Activity page. If you have any questions about the
        request review process, you can email us at{' '}
        <a href="mailto:info@grantcircles.org">info@grantcircles.org</a>
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => handleSuccess()}>Ok</Button>
      </DialogActions>
    </DialogContent>
  </ModalContainer>
)

export default RequestSubmittedModal
