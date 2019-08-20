import React from 'react'
import { NumbersContainer } from './styles'
import NavNumber from '../../../../../../components/NavNumber'

const NavNumbers = ({ activeScreen }) => (
  <NumbersContainer>
    <NavNumber text="1" active={activeScreen === 1} />
    <NavNumber text="2" active={activeScreen === 2} />
    <NavNumber text="3" active={activeScreen === 3} />
    <NavNumber text="4" active={activeScreen === 4} />
  </NumbersContainer>
)

export default NavNumbers
