import React from 'react'
import HowItWorksButton from '../../../../components/HowItWorksButton'
import theme from '../../../../theme'

const NextButton = ({ isLoggedIn, screen, clear, handleNext }) =>
  (!isLoggedIn || screen < 5) && (
    <HowItWorksButton
      text={screen === 5 ? 'Sign Up' : 'Next'}
      onClick={() => {
        clear()
        handleNext()
      }}
      style={{
        backgroundColor: theme.colors.tertiary,
        color: theme.colors.primary
      }}
    />
  )

export default NextButton
