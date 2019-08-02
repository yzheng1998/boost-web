import React from 'react'
import DocumentItem from './components/DocumentItem'

const DocumentList = ({ documents, removeDoc, ledger }) => (
  <ul style={{ listStyle: 'none' }}>
    {documents.map(({ name, id }) => (
      <DocumentItem
        document={name}
        documentId={id}
        removeDoc={removeDoc}
        ledger={ledger}
      />
    ))}
  </ul>
)

export default DocumentList
