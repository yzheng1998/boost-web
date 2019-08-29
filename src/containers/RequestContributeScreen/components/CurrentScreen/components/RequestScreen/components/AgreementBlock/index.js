import React from 'react'
import { AgreementBlockContainer } from './styles'

const AgreementBlock = ({ setState, acceptTerms }) => (
  <AgreementBlockContainer>
    <input
      type="checkbox"
      onChange={() => setState({ acceptTerms: !acceptTerms })}
    />
    &nbsp;I hereby certify that all of the information submitted below is true
    and correct to the best of my knowledge, and that I am requesting funds to
    overcome a financial hardship.
  </AgreementBlockContainer>
)

export default AgreementBlock
