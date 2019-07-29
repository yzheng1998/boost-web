import React from 'react'
import QuestionList from './components/QuestionList'
import Header from '../../components/Header'
import theme from '../../theme'
import Background from '../../components/Background'

const FAQ = () => (
  <Background style={{ justifyContent: 'flex-start', padding: 15 }}>
    <Header
      text="Frequently Asked Questions"
      color={theme.colors.header}
      style={{ marginBottom: 10 }}
    />
    <QuestionList />
  </Background>
)

export default FAQ
