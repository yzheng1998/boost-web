import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { useAlert } from 'react-alert'
import ReactGA from 'react-ga'
import localStore from 'store'
import Background from '../../components/Background'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/PrimaryButton'
import LoadingIcon from '../../components/LoadingIcon'
import theme from '../../theme'
import logo from './GreenPathLogo.png'
import {
  InnerText,
  Wrapper,
  Line,
  LineWrapper,
  LineText,
  Image
} from './styles'
import { LOGIN_USER } from './mutations'
import config from '../../config'
import { Typography } from '@material-ui/core'

ReactGA.initialize(config.gaTrackingCode)

const Login = ({ history }) => {
  const alert = useAlert()

  const [personalEmail, setPersonalEmail] = useState('')
  const [password, setPassword] = useState('')

  localStore.remove('user')

  return (
    <Background style={{ backgroundColor: theme.colors.background }}>
      <Wrapper>
        <Image src={logo} />
        <Header
          text="Welcome to the Grant Circle"
          color={theme.colors.tertiary}
        />
        <Typography style={{ textAlign: 'center', marginTop: 6 }}>
          The Grant Circle gives us a way to be there for each other when times
          get tough.
        </Typography>
        <TextInput
          labelText="Enter personal email"
          style={{ width: 300 }}
          onChange={e => setPersonalEmail(e.target.value)}
          name="setPersonalEmail"
        />
        <TextInput
          type="password"
          labelText="Enter Password"
          style={{ width: 300 }}
          onChange={e => setPassword(e.target.value)}
          name="password"
        />
        <Mutation
          mutation={LOGIN_USER}
          onCompleted={async data => {
            if (!data.loginUser.error) {
              const { token } = data.loginUser
              await localStore.set('user', { token })
              history.push({
                pathname: './home',
                state: { loggingIn: true }
              })
              alert.success('Successfully logged in!')
            } else alert.error(data.loginUser.error.message)
          }}
        >
          {(loginUser, { loading }) => (
            <PrimaryButton
              text={
                loading && personalEmail && password ? (
                  <LoadingIcon />
                ) : (
                  'Log In'
                )
              }
              diabled={loading}
              style={{
                width: 300,
                backgroundColor: theme.colors.tertiary,
                color: 'white',
                marginTop: 15,
                marginBottom: 15
              }}
              onClick={() => {
                const variables = {
                  personalEmail,
                  password
                }
                loginUser({ variables })
              }}
            />
          )}
        </Mutation>
        <InnerText onClick={() => history.push('/recovery')}>
          Having trouble logging in?
        </InnerText>
        <LineWrapper>
          <Line />
          <LineText>OR</LineText>
          <Line />
        </LineWrapper>
        <PrimaryButton
          text="Get Started"
          style={{
            width: 300,
            backgroundColor: theme.colors.grey,
            color: 'black',
            marginTop: 15
          }}
          onClick={() => {
            ReactGA.event({
              category: 'Register',
              action: 'Get Started Pressed'
            })
            history.push({ pathname: '/howItWorks', state: { register: true } })
          }}
        />
      </Wrapper>
    </Background>
  )
}

export default Login
