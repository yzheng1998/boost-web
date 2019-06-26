import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { useAlert } from 'react-alert'
import localStore from 'store'
import Background from '../../components/Background'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { InnerText, Wrapper, Line, LineWrapper, LineText } from './styles'
import { LOGIN_USER } from './mutations'

const Login = ({ history }) => {
  const alert = useAlert()

  const [personalEmail, setPersonalEmail] = useState('')
  const [password, setPassword] = useState('')

  localStore.remove('user')

  return (
    <Background style={{ backgroundColor: theme.colors.background }}>
      <Wrapper>
        <Header text="Welcome Back" color={theme.colors.tertiary} />
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
              history.push('./request')
              alert.success('Successfully logged in!')
            } else alert.error(data.loginUser.error.message)
          }}
        >
          {(loginUser, { loading }) => (
            <PrimaryButton
              text={
                loading && personalEmail && password
                  ? 'Logging in...'
                  : 'Log In'
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
          text="Sign Up"
          style={{
            width: 300,
            backgroundColor: theme.colors.grey,
            color: 'black',
            marginTop: 15
          }}
          onClick={() => history.push('/register')}
        />
      </Wrapper>
    </Background>
  )
}

export default Login
