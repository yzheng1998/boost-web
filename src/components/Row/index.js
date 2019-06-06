import styled from 'styled-components'
import { Flex } from 'grid-styled'

const Row = styled(Flex)`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  width: 100%;
`

export default Row
