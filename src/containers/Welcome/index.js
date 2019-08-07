import React, { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import Header from '../../components/Header'
import theme from '../../theme'
import PrimaryButton from '../../components/PrimaryButton'
import { WelcomeScreen, InfoText, ButtonsContainer } from './styles'
import FinancialHealthPollModal from './components/FinancialHealthPollModal'

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
))

const Welcome = ({ history }) => {
  const [open, setOpen] = useState(history.location.state)

  return (
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
          onClick={() =>
            history.push({ pathname: './request', state: { request: 0 } })
          }
        />
        <PrimaryButton
          text="Make a Contribution"
          style={{
            color: theme.colors.background,
            backgroundColor: theme.colors.tertiary
          }}
          onClick={() =>
            history.push({ pathname: './request', state: { request: 1 } })
          }
        />
      </ButtonsContainer>
      <Dialog open={open} TransitionComponent={Transition}>
        <FinancialHealthPollModal setOpen={setOpen} />
      </Dialog>
    </WelcomeScreen>
  )
}

export default Welcome
