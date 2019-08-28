import React from 'react'
import Subheader from '../../../../../../../../components/Subheader'
import Row from '../../../../../../../../components/Row'
import DocumentInput from '../DocumentInput'
import DocumentList from '../DocumentList'
import InformationText from './components/InformationText'

const DocumentTitle = ({ fundsWithdrawn }) =>
  fundsWithdrawn >= 400
    ? 'Documentation of the financial hardship is required for this request. For more detail on eligible fund uses and documentation requirements, please refer to the FAQ.'
    : 'Documentation of the financial hardship is optional for this request'

const DocumentBlock = ({
  fundsWithdrawn,
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
      text={<DocumentTitle fundsWithdrawn={fundsWithdrawn} />}
    />
    <InformationText />
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
