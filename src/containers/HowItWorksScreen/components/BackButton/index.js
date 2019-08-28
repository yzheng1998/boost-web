import React from 'react'
import HowItWorksButton from '../../../../components/HowItWorksButton'
import theme from '../../../../theme'

const BackButton = ({ isLoggedIn, screen, clear, handleBack }) =>
  (!isLoggedIn || screen > 0) && (
    <HowItWorksButton
      text="Back"
      onClick={() => {
        clear()
        handleBack()
      }}
      style={{
        backgroundColor: theme.colors.tertiary,
        color: theme.colors.primary
      }}
    />
  )

export default BackButton
