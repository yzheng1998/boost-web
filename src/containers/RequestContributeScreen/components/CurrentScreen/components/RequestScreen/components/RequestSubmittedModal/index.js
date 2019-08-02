import React from 'react'
import { Link } from 'react-router-dom'
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
        Congratulations, your request has been successfully submitted! Our
        admins are working to approve your request as soon as possible. Please
        allow up to 3-5 business days to hear a response and thank you again for
        choosing GreenPath Grant Circle. For more information, please see{' '}
        <Link to="/faq">FAQ</Link>
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => handleSuccess()}>Ok</Button>
      </DialogActions>
    </DialogContent>
  </ModalContainer>
)

export default RequestSubmittedModal
