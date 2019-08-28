import React, { useState } from 'react'
import { connect } from 'react-redux'
import localStore from 'store'
import HowItWorksButton from '../../components/HowItWorksButton'
import Background from '../../components/Background'
import theme from '../../theme'
import { ButtonContainer, Container } from './styles'
import { clearRedux } from '../../redux/actions'
import ScreenSelector from './components/ScreenSelector'

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearRedux())
})

const HowItWorksScreen = ({ history, clear }) => {
  const [screen, updateScreen] = useState(0)
  const isLoggedIn = localStore.get('user')
  console.log(isLoggedIn)

  const handleNext = () => {
    if (screen === 5) {
      history.push({
        pathname: '/register',
        state: { register: history.location.state }
      })
    }
    updateScreen(screen + 1)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    if (screen === 0) {
      history.push({
        pathname: '/login',
        state: { register: history.location.state }
      })
    }
    updateScreen(screen - 1)
    window.scrollTo(0, 0)
  }

  return (
    <Background
      style={{
        backgroundColor: theme.colors.background
      }}
    >
      <Container>
        <ScreenSelector screen={screen} />
        <ButtonContainer buttonPlacement={isLoggedIn && screen === 0}>
          {(!isLoggedIn || screen > 0) && (
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
          )}
          {(!isLoggedIn || screen < 5) && (
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
          )}
        </ButtonContainer>
      </Container>
    </Background>
  )
}

const HowItWorks = connect(
  null,
  mapDispatchToProps
)(HowItWorksScreen)

export default HowItWorks
