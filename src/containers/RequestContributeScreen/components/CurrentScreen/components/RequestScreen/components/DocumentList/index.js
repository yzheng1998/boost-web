import React from 'react'
import DocumentItem from './components/DocumentItem'

const DocumentList = ({ documents, removeDoc, ledger }) => (
  <ul
    style={{
      listStyle: 'none',
      padding: 0
    }}
  >
    {documents.map(document => (
      <DocumentItem document={document} removeDoc={removeDoc} ledger={ledger} />
    ))}
  </ul>
)

export default DocumentList
