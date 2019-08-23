import React, { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import Header from '../../components/Header'
import theme from '../../theme'
import { WelcomeScreen, InfoText, ButtonsContainer } from './styles'
import FinancialHealthPollModal from './components/FinancialHealthPollModal'
import MakeRequestButton from './components/MakeRequestButton'
import MakeContributionButton from './components/MakeContributionButton'

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
))

const Welcome = ({ history }) => {
  const [open, setOpen] = useState(history.location.state)

  const createStyle = width => {
    const webStyle = { justifyContent: 'center' }
    const mobileStyle = {
      justifyContent: 'center',
      fontSize: 25,
      textAlign: 'center'
    }
    return width < 400 ? mobileStyle : webStyle
  }

  return (
    <WelcomeScreen>
      <Header
        text="Welcome to the Grant Circle"
        color={theme.colors.header}
        style={createStyle(window.innerWidth)}
      />
      <InfoText style={{ color: theme.colors.tertiary }}>
        The purpose of the Grant Circle is to help workers like you in times of
        financial hardship.
      </InfoText>
      <ButtonsContainer>
        <MakeRequestButton history={history} />
        <MakeContributionButton history={history} />
      </ButtonsContainer>
      <Dialog open={open} TransitionComponent={Transition}>
        <FinancialHealthPollModal setOpen={setOpen} />
      </Dialog>
      <InfoText>
        Need to view or edit an open request for funds? Go to&nbsp;
        <Link to="/activity">My Activity.</Link>
      </InfoText>
      <InfoText>
        Have questions? Check out the&nbsp;
        <Link to="/faq">Frequently Asked Questions.</Link>
      </InfoText>
    </WelcomeScreen>
  )
}

export default Welcome
