import React from 'react'
import Subheader from '../../../../../../../../components/Subheader'
import Row from '../../../../../../../../components/Row'
import { Span } from './styles'
import TextInput from '../../../../../../../../components/TextInput'

const AmountBlock = ({
  amount,
  onChange,
  addTouched,
  validateForm,
  displayErrors
}) => (
  <>
    <Subheader
      text="How much would you like to request?"
      style={{ marginBottom: 20 }}
    />
    <Row justifyContent="flex-start">
      <Span>$</Span>
      <TextInput
        type="number"
        rootStyle={{ alignSelf: 'center' }}
        name="amount"
        onChange={onChange}
        value={amount}
        onFocus={() => addTouched('amount')}
        onBlur={() => validateForm(false)}
        errorMessage={displayErrors.amount}
        inputStyle={{ fontSize: 25, width: 100 }}
      />
    </Row>
  </>
)

export default AmountBlock
