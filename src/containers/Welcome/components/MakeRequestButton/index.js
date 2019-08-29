import React from 'react'
import ReactGA from 'react-ga'
import { InfoText, ButtonContainer } from './styles'
import PrimaryButton from '../../../../components/PrimaryButton'
import theme from '../../../../theme'
import config from '../../../../config'

ReactGA.initialize(config.gaTrackingCode)

const MakeRequestButton = ({ history }) => (
  <ButtonContainer>
    <InfoText style={{ textAlign: 'center' }}>
      If you are facing financial hardship, we may be able to help!
    </InfoText>
    <PrimaryButton
      text="Make a Request"
      style={{
        color: theme.colors.tertiary,
        backgroundColor: theme.colors.background
      }}
      onClick={() => {
        ReactGA.event({
          category: 'Requests',
          action: 'Form Opened'
        })
        history.push({ pathname: './request', state: { request: 0 } })
      }}
    />
  </ButtonContainer>
)

export default MakeRequestButton
