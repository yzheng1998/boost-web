import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Carousel from 'nuka-carousel'
import { clearRedux } from '../../redux/actions'
import AuthButton from '../../components/AuthButton'
import Background from '../../components/Background'
import Header from '../../components/Header'
import theme from '../../theme'
import { BtnWrapper, CenterParagraph, Container, Slide } from './styles'
import How3 from '../../../src/assets/images/how3.png'
import How4 from '../../../src/assets/images/how4.png'
import How5 from '../../../src/assets/images/how5.png'

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearRedux())
})

const SlideImages = [How3, How4, How5].map(image => (
  <Slide alt="How" src={image} />
))

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
      <Carousel width="40%" autoplay wrapAround withoutControls>
        {SlideImages}
      </Carousel>
      <CenterParagraph>
        When you contribute back into the fund, you can request withdrawals more
        frequently. You can also contribute more than what you’ve withdrawn in
        order to grow the fund so that more of your co-workers can get access.
      </CenterParagraph>
      <CenterParagraph style={{ marginTop: 0 }}>
        For our full Funds Usage Policy, please read our Frequently Asked
        Questions
        <Link to="/faq" target="_blank" rel="noopener noreferrer">
          here
        </Link>
      </CenterParagraph>

      <BtnWrapper>
        <AuthButton
          text="Get started"
          onClick={() => {
            clear()
            history.push('/register')
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
