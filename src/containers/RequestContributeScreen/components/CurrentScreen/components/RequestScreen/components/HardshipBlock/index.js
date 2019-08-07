import React from 'react'
import Subheader from '../../../../../../../../components/Subheader'
import Row from '../../../../../../../../components/Row'
import MultiselectBtn from '../../../../../../../../components/MultiselectBtn'
import Description from '../Description'
import theme from '../../../../../../../../theme'

const HardshipBlock = ({
  experiencedHardship,
  hardshipExplanation,
  hardshipDate,
  onChange,
  addTouched,
  validateForm,
  displayErrors,
  handleClick
}) => (
  <>
    <Subheader text="Have you experienced any financial hardship?" />
    <Row justifyContent="space-between">
      <MultiselectBtn
        text="Yes"
        variant={experiencedHardship ? 'contained' : 'outlined'}
        style={
          experiencedHardship
            ? {
                backgroundColor: theme.colors.tertiary,
                color: 'white',
                width: 150
              }
            : { width: 150 }
        }
        onClick={() => handleClick(true)}
        value={experiencedHardship}
      />
      <MultiselectBtn
        text="No"
        variant={experiencedHardship === false ? 'contained' : 'outlined'}
        style={
          experiencedHardship === false
            ? {
                backgroundColor: theme.colors.tertiary,
                color: 'white',
                width: 150
              }
            : { width: 150 }
        }
        onClick={() => handleClick(false)}
        value={experiencedHardship === false}
      />
    </Row>
    <Description
      headerText="Please describe what happened:"
      labelText="Enter Description"
      name="hardshipExplanation"
      value={hardshipExplanation}
      onChange={onChange}
      addTouched={addTouched}
      validateForm={validateForm}
      displayErrors={displayErrors}
    />

    <Description
      headerText="When did this happen?"
      labelText="Describe the time it happened here"
      name="hardshipDate"
      value={hardshipDate}
      onChange={onChange}
      addTouched={addTouched}
      validateForm={validateForm}
      displayErrors={displayErrors}
    />
  </>
)

export default HardshipBlock
