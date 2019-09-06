import React, { forwardRef, useState } from 'react'
import { Dialog } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import Header from '../../components/Header'
import theme from '../../theme'
import { WelcomeScreen, InfoText, ButtonsContainer } from './styles'
import FinancialHealthPollModal from './components/FinancialHealthPollModal'
import MakeRequestButton from './components/MakeRequestButton'
import MakeContributionButton from './components/MakeContributionButton'
import InformationBlock from './components/InformationBlock'

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
))

const Welcome = ({ history }) => {
  const [open, setOpen] = useState(history.location.state)

  const createStyle = width => {
    const webStyle = {
      justifyContent: 'center',
      fontSize: 13,
      fontFamily: theme.fonts.medium.family
    }
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
        text="WELCOME TO THE"
        color={theme.colors.header}
        style={createStyle(window.innerWidth)}
      />
      <Header
        style={{
          justifyContent: 'center',
          fontSize: 55,
          fontFamily: theme.fonts.medium.family,
          textAlign: 'center',
          marginBottom: 10
        }}
        text="GRANT CIRCLE"
        color={theme.colors.header}
      />
      <InfoText green>
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
      <InformationBlock />
    </WelcomeScreen>
  )
}

export default Welcome
