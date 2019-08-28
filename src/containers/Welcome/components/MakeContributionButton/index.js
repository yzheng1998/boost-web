import React from 'react'
import { InfoText, ButtonContainer } from './styles'
import ReactGA from 'react-ga'
import PrimaryButton from '../../../../components/PrimaryButton'
import theme from '../../../../theme'

ReactGA.initialize('UA-143197748-1')

const MakeContributionButton = ({ history }) => {
  return (
    <ButtonContainer>
      <InfoText style={{ textAlign: 'center' }}>
        Please consider donating so the fund can serve more members of your
        workplace community
      </InfoText>
      <PrimaryButton
        text="Make a Contribution"
        style={{
          color: theme.colors.background,
          backgroundColor: theme.colors.tertiary
        }}
        onClick={() => {
          ReactGA.event({
            category: 'Contributions',
            action: 'Form Opened'
          })
          history.push({ pathname: './request', state: { request: 1 } })
        }}
      />
    </ButtonContainer>
  )
}

export default MakeContributionButton
