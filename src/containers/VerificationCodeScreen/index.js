import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import ReactCodeInput from 'react-code-input'
import Background from '../../components/Background'
import Header from '../../components/Header'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { Wrapper } from './styles'

const Verification = ({ history }) => {
  const alert = useAlert()

  const [code, setCode] = useState('')

  const verifiedCode = history.location.state.code

  const inputProps = {
    className: ReactCodeInput,
    inputStyle: {
      fontSize: '30px',
      width: '50px',
      margin: '4px',
      height: '50px',
      MozAppearance: 'textfield',
      marginBottom: '8px',
      textAlign: 'center'
    }
  }

  return (
    <Background style={{ backgroundColor: theme.colors.primary }}>
      <Wrapper>
        <Header
          text="Enter 4 digit code"
          color={theme.colors.tertiary}
          style={{ marginBottom: '8px' }}
        />

        <ReactCodeInput
          type="number"
          fields={4}
          {...inputProps}
          onChange={e => setCode(e)}
        />

        <PrimaryButton
          text="Verify"
          style={{
            width: '100%',
            backgroundColor: theme.colors.tertiary,
            color: 'white',
            marginTop: 15,
            marginBottom: 15
          }}
          onClick={() =>
            verifiedCode === Number(code)
              ? history.push({
                  pathname: '/new-password',
                  state: { code }
                })
              : alert.show('Incorrect verification code')
          }
          disabled={code.length < 4}
        />
      </Wrapper>
    </Background>
  )
}

export default Verification
