/* eslint-disable react/jsx-indent */
import React from 'react'
import { Link } from 'react-router-dom'
import Subheader from '../../../../../../../../components/Subheader'
import Row from '../../../../../../../../components/Row'
import DocumentInput from '../DocumentInput'
import DocumentList from '../DocumentList'
import InformationText from './components/InformationText'

const RequiredText = () => (
  <div>
    Documentation of the financial hardship is REQUIRED for this request. For
    more detail on eligible fund uses and documentation requirements, please
    refer to the&nbsp;
    <Link to="/faq" target="_blank" rel="noopener noreferrer">
      FAQ.
    </Link>
  </div>
)

const DocumentTitle = ({ fundsWithdrawn }) =>
  fundsWithdrawn > 400 ? (
    <RequiredText />
  ) : (
    'Documentation of the financial hardship is OPTIONAL for this request'
  )

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
