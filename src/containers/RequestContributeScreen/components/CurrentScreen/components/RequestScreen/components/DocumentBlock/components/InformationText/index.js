import React from 'react'
import { InfoText } from './styles'
import { acceptedDocuments } from './constants'

const AcceptedDocuments = () => (
  <ul>
    {acceptedDocuments.map(doc => (
      <li>
        <InfoText>{doc}</InfoText>
      </li>
    ))}
  </ul>
)

const InformationText = () => (
  <ul>
    <li>
      <InfoText>Accepted documents include but are not limited to:</InfoText>
    </li>
    <AcceptedDocuments />
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
