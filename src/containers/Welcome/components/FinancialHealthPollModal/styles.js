import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const ModalContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    min-width: 500px;
  }
`

export default ModalContainer
