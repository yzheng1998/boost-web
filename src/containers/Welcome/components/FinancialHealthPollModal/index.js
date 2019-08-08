import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import ModalContainer from './styles'
import Labels from './components/Labels'
import ConfirmButton from './components/ConfirmButton'

const FinancialHealthPollModal = ({ setOpen }) => {
  const [financialHealthRating, setFinancialHealthRating] = useState(50)

  return (
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
        <Slider
          getAriaValueText={val => setFinancialHealthRating(val)}
          defaultValue={50}
          step={1}
          valueLabelDisplay="auto"
        />
        <Labels />
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
