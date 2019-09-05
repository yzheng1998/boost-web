import React from 'react'
import { InfoText, ButtonContainer } from './styles'
import ReactGA from 'react-ga'
import PrimaryButton from '../../../../components/PrimaryButton'
import theme from '../../../../theme'
import config from '../../../../config'

ReactGA.initialize(config.gaTrackingCode)

const MakeContributionButton = ({ history }) => (
  <ButtonContainer>
    <InfoText>
      Please consider donating, so the fund can serve more members of your
      workplace community.
    </InfoText>
    <PrimaryButton
      text="Make a Contribution"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.tertiary
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

export default MakeContributionButton
