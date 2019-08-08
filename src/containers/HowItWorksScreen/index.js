import React, { useState } from 'react'
import { connect } from 'react-redux'
import Carousel from 'nuka-carousel'
import AuthButton from '../../components/AuthButton'
import Background from '../../components/Background'
import Header from '../../components/Header'
import theme from '../../theme'
import { BtnWrapper, CenterParagraph, Container, Slide } from './styles'
import { clearRedux } from '../../redux/actions'
import How1 from '../../../src/assets/images/how1.png'
import How2 from '../../../src/assets/images/how2.png'
import LoadingIcon from '../../components/LoadingIcon'

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearRedux())
})

const SlideImages = toggleImageLoading =>
  [How1, How2].map(image => (
    <Slide alt="How" src={image} onLoad={() => toggleImageLoading(false)} />
  ))

const HowItWorksScreen = ({ history, clear }) => {
  const [imageLoading, toggleImageLoading] = useState(true)

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
        <Carousel width="40%" autoplay wrapAround withoutControls>
          {SlideImages(toggleImageLoading)}
          {imageLoading && <LoadingIcon />}
        </Carousel>
        <CenterParagraph>
          Contributions from employees are matched by support from a charitable
          foundation.
        </CenterParagraph>

        <BtnWrapper>
          <AuthButton
            text="Next"
            onClick={() => {
              clear()
              history.push({
                pathname: '/explanation',
                state: { register: history.location.state }
              })
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

const HowItWorks = connect(
  null,
  mapDispatchToProps
)(HowItWorksScreen)

export default HowItWorks
