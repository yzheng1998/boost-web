import React, { useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import ModalContainer from './styles'
import ConfirmButton from './components/ConfirmButton'
import HealthOptions from './components/HealthOptions'

const FinancialHealthPollModal = ({ setOpen }) => {
  const [financialHealthRating, setFinancialHealthRating] = useState('0')
  return (
    <ModalContainer>
      <DialogTitle>
        How much stress are your finances causing you today?
      </DialogTitle>
      <DialogContent
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <HealthOptions
          onChange={setFinancialHealthRating}
          currentValue={financialHealthRating}
        />
      </DialogContent>
      <DialogActions>
        <ConfirmButton
          setOpen={setOpen}
          financialHealthRating={financialHealthRating}
        />
      </DialogActions>
    </ModalContainer>
  )
}

export default FinancialHealthPollModal
