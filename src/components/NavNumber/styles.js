import styled from 'styled-components'
import { Flex } from 'grid-styled'

const Number = styled(Flex)`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  font-size: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white
  background-color: ${({ active, theme }) =>
    active ? theme.colors.tertiary : theme.colors.grey};
  margin: 8px;
`
export default Number
