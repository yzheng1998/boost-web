import styled from 'styled-components'
import { Flex } from 'grid-styled'

const ProfileWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 40%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 25px;
  margin-left: 5px;
  /* border-top: 15px solid #1e575c; */
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 70%;
  }
`
export default ProfileWrapper
