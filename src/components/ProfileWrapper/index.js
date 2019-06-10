import styled from 'styled-components'
import { Flex } from 'grid-styled'

const ProfileWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 40%;
  align-self: center;
  background-color: white;
  padding: 25px;
  border-top: 10px solid #3f51b5;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 70%;
  }
`
export default ProfileWrapper