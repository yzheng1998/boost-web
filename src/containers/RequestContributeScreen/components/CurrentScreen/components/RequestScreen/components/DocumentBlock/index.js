import React from 'react'
import Subheader from '../../../../../../../../components/Subheader'
import Row from '../../../../../../../../components/Row'
import DocumentInput from '../DocumentInput'
import DocumentList from '../DocumentList'

const DocumentBlock = ({
  onDocChange,
  addTouched,
  validateForm,
  displayErrors,
  documents,
  setState
}) => (
  <>
    <Subheader
      style={{ marginTop: 20 }}
      text="Upload supporting documents (PDF only)"
    />
    <Row justifyContent="flex-start" style={{ flexDirection: 'column' }}>
      <DocumentInput
        onChange={onDocChange}
        onFocus={() => addTouched('documents')}
        onBlur={() => validateForm(false)}
        errorMessage={displayErrors.documents}
        files="true"
        multiple
      />
      <DocumentList
        documents={documents}
        removeDoc={docUrl =>
          setState({
            documents: documents.filter(({ url }) => url !== docUrl)
          })
        }
      />
    </Row>
  </>
)

export default DocumentBlock
