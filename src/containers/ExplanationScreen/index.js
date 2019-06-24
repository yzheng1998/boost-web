import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearRedux } from '../../redux/actions'
import AuthButton from '../../components/AuthButton'
import Background from '../../components/Background'
import Header from '../../components/Header'
import theme from '../../theme'
import { BtnWrapper, CenterParagraph, Container } from './styles'
import TempIcon from '../../../src/boostIcon.png'

const mapDispatchToProps = dispatch => ({
  clearRedux: () => dispatch(clearRedux())
})

class ExplanationScreen extends Component {
  render() {
    const { history } = this.props
    return (
      <Background style={{ backgroundColor: theme.colors.background }}>
        <Container>
          <Header
            text="How It Works"
            color={theme.colors.header}
            style={{ alignSelf: 'center' }}
          />
          <CenterParagraph>
            When something goes wrong -- whether it’s your car, your apartment
            or something else -- you can request a withdrawal.
          </CenterParagraph>
          <img src={TempIcon} style={{ width: 150, height: 150 }} />
          <CenterParagraph>
            You can withdraw up to $1,000 every two years. When you contribute
            back into the fund, you can request withdrawals more frequently. You
            can also contribute more than what you’ve withdrawn in order to grow
            the fund so that more of ytour co-workers can get access.
          </CenterParagraph>

          <BtnWrapper>
            <AuthButton
              text="Next"
              onClick={() => {
                this.props.clearRedux()
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
  }
}

const Explanation = connect(
  null,
  mapDispatchToProps
)(ExplanationScreen)

export default Explanation
