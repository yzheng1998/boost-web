import React from 'react'
import { InfoText, ButtonContainer } from './styles'
import PrimaryButton from '../../../../components/PrimaryButton'
import theme from '../../../../theme'

const MakeContributionButton = ({ history }) => (
  <ButtonContainer>
    <InfoText>
      Please consider donating so the fund can serve more members of your
      workplace community.
    </InfoText>
    <PrimaryButton
      text="Make a Contribution"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.tertiary
      }}
      onClick={() =>
        history.push({ pathname: './request', state: { request: 1 } })
      }
    />
  </ButtonContainer>
)

export default MakeContributionButton
