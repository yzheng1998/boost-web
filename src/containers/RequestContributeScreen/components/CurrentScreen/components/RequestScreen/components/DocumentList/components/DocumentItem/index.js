import React from 'react'
import Clear from '@material-ui/icons/Clear'
import { ItemContainer, DocumentName } from './styles'

const DocumentItem = ({ document, documentId, removeDoc, ledger }) => (
  <ItemContainer>
    <DocumentName>{document}</DocumentName>
    <Clear
      fontSize="small"
      onClick={() =>
        ledger ? removeDoc({ variables: { documentId } }) : removeDoc(document)
      }
    />
  </ItemContainer>
)

export default DocumentItem
