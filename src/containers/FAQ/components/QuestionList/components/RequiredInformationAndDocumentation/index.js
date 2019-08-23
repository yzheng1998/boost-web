import React from 'react'
import { Typography } from '@material-ui/core'
import { AcceptedDocuments } from './constants'
import { InfoAndDocContainer } from './styles'

const RenderedList = () => (
  <ul>
    {AcceptedDocuments.map(type => (
      <li>{type}</li>
    ))}
  </ul>
)

const RequiredInformationAndDocumentation = () => (
  <InfoAndDocContainer>
    <Typography>
      In order to access more than $400 of Grant Circle funds, documentation is
      required in order to confirm that a financial hardship has occurred and
      that Grant Circle funds are needed to address it. This is our way of
      ensuring that the fund will be as financially sustainable as possible and
      that funds are put to the best possible use. Accepted documents include,
      but are not limited to:
    </Typography>
    <RenderedList />
    <Typography style={{ marginBottom: 15 }}>
      Accepted file types include PDF, PNG, or JPEG. Photos or screenshots are
      accepted as long as the information is legible.
    </Typography>
    <Typography>
      Do not include information such as social security numbers, bank account
      numbers, user names, or passwords. Please black out, remove, or otherwise
      cover up this information before submitting your documents. Also, please
      do not send us documentation via email; please upload it via the online
      request form.
    </Typography>
  </InfoAndDocContainer>
)

export default RequiredInformationAndDocumentation
