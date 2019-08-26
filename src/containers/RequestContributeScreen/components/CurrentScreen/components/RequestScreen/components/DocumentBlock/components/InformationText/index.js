import React from 'react'
import { InfoText } from './styles'

const InformationText = () => (
  <ul>
    <li>
      <InfoText>Accepted documents include but are not limited to:</InfoText>
    </li>
    <ul>
      <li>
        <InfoText>
          Bills or receipts showing expenses related to the hardship and need
          for funds.
        </InfoText>
      </li>
      <li>
        <InfoText>
          Documents showing changes in income or expenses due (paystubs, late
          notices, etc.)
        </InfoText>
      </li>
      <li>
        <InfoText>
          Any other documents that provide supporting detail about the financial
          hardship and need for funds (examples: bank statements, eviction
          warnings, etc)
        </InfoText>
      </li>
    </ul>
    <li>
      <InfoText>
        Accepted file types include PDF, PNG, or JPEG. Photos or screenshots are
        accepted as long as the information is legible.
      </InfoText>
    </li>
    <li>
      <InfoText>
        Do not include information such as social security numbers, bank account
        numbers, user names, or passwords. Please black out, remove, or
        otherwise cover up this information before submitting your documents.
        Also, please do not send us documentation via email; please upload it
        via the online request form.
      </InfoText>
    </li>
  </ul>
)

export default InformationText
