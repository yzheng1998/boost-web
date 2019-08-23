import React from 'react'
import { InfoText, ButtonContainer } from './styles'
import PrimaryButton from '../../../../components/PrimaryButton'
import theme from '../../../../theme'

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
      onClick={() =>
        history.push({ pathname: './request', state: { request: 0 } })
      }
    />
  </ButtonContainer>
)

export default MakeRequestButton
