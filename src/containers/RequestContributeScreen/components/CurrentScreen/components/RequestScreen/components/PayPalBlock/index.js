import React from 'react'
import Subheader from '../../../../../../../../components/Subheader'
import Row from '../../../../../../../../components/Row'
import TextInput from '../../../../../../../../components/TextInput'

const PayPalBlock = ({
  onChange,
  payPalEmail,
  addTouched,
  validateForm,
  displayErrors
}) => (
  <>
    <Subheader
      style={{ marginTop: 20 }}
      text="Please enter your email associated with your PayPal account"
    />
    <Row justifyContent="flex-start">
      <TextInput
        type="text"
        labelText="PayPal account email"
        rootStyle={{ alignSelf: 'center' }}
        name="payPalEmail"
        onChange={onChange}
        value={payPalEmail}
        onFocus={() => addTouched('payPalEmail')}
        onBlur={() => validateForm(false)}
        errorMessage={displayErrors.payPalEmail}
      />
    </Row>
  </>
)

export default PayPalBlock
