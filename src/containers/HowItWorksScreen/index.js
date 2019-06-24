import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthButton from '../../components/AuthButton'
import Background from '../../components/Background'
import Header from '../../components/Header'
import theme from '../../theme'
import { BtnWrapper, CenterParagraph, Container } from './styles'
import { clearRedux } from '../../redux/actions'
import TempIcon from '../../../src/boostIcon.png'

const mapDispatchToProps = dispatch => ({
  clearRedux: () => dispatch(clearRedux())
})

class HowItWorksScreen extends Component {
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
            Anyone can contribute into the Grant Circle Fund. The more we each
            give, the more funds there are for any of us to use.
          </CenterParagraph>
          <img
            src={TempIcon}
            style={{ width: 150, height: 150 }}
            alt="temp boost icon"
          />
          <CenterParagraph style={{ textAlign: 'center' }}>
            Contributions from employees are matched by support from a
            charitable foundation.
          </CenterParagraph>

          <BtnWrapper>
            <AuthButton
              text="Next"
              onClick={() => {
                this.props.clearRedux()
                history.push('/explanation')
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

const HowItWorks = connect(
  null,
  mapDispatchToProps
)(HowItWorksScreen)

export default HowItWorks
