import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'
import { useAlert } from 'react-alert'
import localStore from 'store'
import Background from '../../components/Background'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { Wrapper } from './styles'
import { FORGOT_PASSWORD } from './graphql'

const Recovery = ({ history }) => {
  const alert = useAlert()

  const [recoveryEmail, setRecoveryEmail] = useState('')

  useEffect(() => {
    localStore.remove('user')
    localStore.remove('recoverUser')
  })

  const handleSubmit = async (path, verify) => {
    const verified = await verify()
    if (verified.data.forgotPassword.code) {
      localStore.set('recoverUser', recoveryEmail)
      history.push({
        pathname: path,
        state: { code: verified.data.forgotPassword.code }
      })
    } else {
      alert.show('Email does not exist')
    }
  }

  return (
    <Background style={{ backgroundColor: theme.colors.primary }}>
      <Wrapper>
        <Header text="Email" color={theme.colors.tertiary} />

        <TextInput
          labelText="Enter personal email"
          style={{ width: 300 }}
          onChange={e => setRecoveryEmail(e.target.value)}
          name="setRecoveryEmail"
        />

        <Mutation mutation={FORGOT_PASSWORD}>
          {(forgotPassword, { loading }) => {
            const variables = {
              email: recoveryEmail
            }
            return (
              <PrimaryButton
                text={loading ? 'Emailing code...' : 'Next'}
                style={{
                  width: 300,
                  backgroundColor: theme.colors.tertiary,
                  color: 'white',
                  marginTop: 15,
                  marginBottom: 15
                }}
                onClick={() => {
                  handleSubmit('/verification', () =>
                    forgotPassword({ variables })
                  )
                }}
                disabled={!recoveryEmail || loading}
              />
            )
          }}
        </Mutation>
      </Wrapper>
    </Background>
  )
}

export default Recovery
