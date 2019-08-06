import React from 'react'
import Slider from '@material-ui/core/Slider'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import ModalContainer from './styles'
import { Button } from '@material-ui/core'
import Labels from './Labels'

const FinancialHealthPollModal = ({ setOpen }) => (
  <ModalContainer>
    <DialogTitle>How is your financial health?</DialogTitle>
    <DialogContent
      style={{
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Slider defaultValue={50} step={1} valueLabelDisplay="auto" />
      <Labels />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Confirm</Button>
    </DialogActions>
  </ModalContainer>
)

export default FinancialHealthPollModal
