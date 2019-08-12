import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const ItemContainer = styled(Flex)`
  border: 1px solid grey;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 8px;
`

export const DocumentName = styled(Flex)`
  display: block;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
`
