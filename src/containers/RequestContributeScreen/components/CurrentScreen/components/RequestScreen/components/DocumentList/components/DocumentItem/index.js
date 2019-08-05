import React from 'react'
import Clear from '@material-ui/icons/Clear'
import { ItemContainer, DocumentName } from './styles'

const DocumentItem = ({ document: { url, id, name }, removeDoc, ledger }) => (
  <ItemContainer>
    <DocumentName>{name}</DocumentName>
    <Clear
      fontSize="small"
      onClick={() =>
        ledger ? removeDoc({ variables: { documentId: id } }) : removeDoc(url)
      }
    />
  </ItemContainer>
)

export default DocumentItem
