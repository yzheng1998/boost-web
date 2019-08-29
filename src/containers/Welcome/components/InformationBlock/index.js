import React from 'react'
import { Link } from 'react-router-dom'
import { InfoText } from '../../styles'
import { InfoContainer } from './styles'

const InformationBlock = () => (
  <InfoContainer>
    <InfoText>
      Need to view or edit an open request for funds? Go to&nbsp;
      <Link to="/activity">My Activity.</Link>
    </InfoText>
    <InfoText>
      Have questions? Check out the&nbsp;
      <Link to="/faq">Frequently Asked Questions.</Link>
    </InfoText>
  </InfoContainer>
)

export default InformationBlock
