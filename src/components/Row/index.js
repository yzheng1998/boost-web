import styled from 'styled-components'
import { Flex } from 'grid-styled'

const Row = styled(Flex)`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  width: 100%;
  margin-bottom: 10px;
`

export default Row
