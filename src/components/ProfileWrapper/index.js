import styled from 'styled-components'
import { Flex } from 'grid-styled'

const ProfileWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 40%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 25px;
  margin-left: 5px;
  overflow: hidden;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 100%;
  }
`
export default ProfileWrapper
