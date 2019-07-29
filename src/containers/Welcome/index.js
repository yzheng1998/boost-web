import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import theme from '../../theme'
import PrimaryButton from '../../components/PrimaryButton'
import { WelcomeScreen, InfoText, ButtonsContainer } from './styles'

const Welcome = () => (
  <WelcomeScreen>
    <Header
      text="Welcome to the GreenPath Grant Circle"
      color={theme.colors.header}
      style={{ justifyContent: 'center' }}
    />
    <InfoText>
      Learn more about&nbsp;<Link to="/faq">Grant Circles Pilot.</Link>
    </InfoText>
    <ButtonsContainer>
      <PrimaryButton
        text="Make a Request"
        style={{
          color: theme.colors.tertiary,
          backgroundColor: theme.colors.background
        }}
      />
      <PrimaryButton
        text="Make a Contribution"
        style={{
          color: theme.colors.background,
          backgroundColor: theme.colors.tertiary
        }}
      />
    </ButtonsContainer>
  </WelcomeScreen>
)

export default Welcome
