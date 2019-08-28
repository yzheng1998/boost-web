import React, { useState } from 'react'
import { connect } from 'react-redux'
import localStore from 'store'
import Background from '../../components/Background'
import theme from '../../theme'
import { ButtonContainer, Container } from './styles'
import { clearRedux } from '../../redux/actions'
import ScreenSelector from './components/ScreenSelector'
import BackButton from './components/BackButton'
import NextButton from './components/NextButton'

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearRedux())
})

const HowItWorksScreen = ({ history, clear }) => {
  const [screen, updateScreen] = useState(0)
  const isLoggedIn = localStore.get('user')

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
          <BackButton
            isLoggedIn={isLoggedIn}
            screen={screen}
            clear={clear}
            handleBack={handleBack}
          />
          <NextButton
            isLoggedIn={isLoggedIn}
            screen={screen}
            clear={clear}
            handleNext={handleNext}
          />
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
