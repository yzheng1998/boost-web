import React from 'react'
import { connect } from 'react-redux'
import { clearRedux } from '../../redux/actions'
import AuthButton from '../../components/AuthButton'
import Background from '../../components/Background'
import Header from '../../components/Header'
import theme from '../../theme'
import { BtnWrapper, CenterParagraph, Container } from './styles'
import TempIcon from '../../../src/boostIcon.png'

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearRedux())
})

const ExplanationScreen = ({ history, clear }) => (
  <Background style={{ backgroundColor: theme.colors.background }}>
    <Container>
      <Header
        text="How It Works"
        color={theme.colors.header}
        style={{ alignSelf: 'center' }}
      />
      <CenterParagraph>
        When something goes wrong -- whether it’s your car, your apartment or
        something else -- you can request a withdrawal. You can withdraw up to
        $1,000 every two years.
      </CenterParagraph>
      <img
        src={TempIcon}
        style={{ width: 150, height: 150 }}
        alt="temp boost icon"
      />
      <CenterParagraph>
        When you contribute back into the fund, you can request withdrawals more
        frequently. You can also contribute more than what you’ve withdrawn in
        order to grow the fund so that more of your co-workers can get access.
      </CenterParagraph>

      <BtnWrapper>
        <AuthButton
          text="Get started"
          onClick={() => {
            clear()
            history.push('/request')
          }}
          style={{
            backgroundColor: theme.colors.tertiary,
            color: theme.colors.primary
          }}
        />
      </BtnWrapper>
    </Container>
  </Background>
)

const Explanation = connect(
  null,
  mapDispatchToProps
)(ExplanationScreen)

export default Explanation
