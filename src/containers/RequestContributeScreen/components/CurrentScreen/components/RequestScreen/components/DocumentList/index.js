import React from 'react'

const DocumentList = ({ documents }) => (
  <ul>
    {documents.map(document => (
      <li>{document}</li>
    ))}
  </ul>
)

export default DocumentList
