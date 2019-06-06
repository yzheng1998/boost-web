import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthButton from '../../components/AuthButton'
import Background from '../../components/Background'
import Header from '../../components/Header'
import theme from '../../theme'
import { BtnRow, BtnWrapper, Label, CenterParagraph } from './styles'
import { clearRedux } from '../../redux/actions'

const mapDispatchToProps = dispatch => ({
  clearRedux: () => dispatch(clearRedux())
})

class HomeScreen extends Component {
  render() {
    const { history } = this.props
    return (
      <Background style={{ backgroundColor: theme.colors.backgroundSecondary }}>
        <Header
          text="Get a hand up"
          color={theme.colors.headerSecondary}
          style={{ alignSelf: 'center' }}
        />
        <CenterParagraph>
          Your employer uses Boost to make sure they are there for you when
          times get tough
        </CenterParagraph>
        <BtnRow>
          <BtnWrapper>
            <Label>Getting Started</Label>
            <AuthButton
              text="Login"
              onClick={() => {
                this.props.clearRedux()
                history.push('/login')
              }}
            />
          </BtnWrapper>
          <BtnWrapper>
            <Label>Have an account?</Label>
            <AuthButton
              text="Create Account"
              onClick={() => {
                this.props.clearRedux()
                history.push('/register')
              }}
            />
          </BtnWrapper>
        </BtnRow>
      </Background>
    )
  }
}

const Home = connect(
  null,
  mapDispatchToProps
)(HomeScreen)

export default Home
