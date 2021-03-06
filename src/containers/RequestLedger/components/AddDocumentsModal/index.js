import React, { useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { ModalContainer, Row } from './styles'
import { Button } from '@material-ui/core'
import DocumentInput from '../../../RequestContributeScreen/components/CurrentScreen/components/RequestScreen/components/DocumentInput'
import DocumentList from '../../../RequestContributeScreen/components/CurrentScreen/components/RequestScreen/components/DocumentList'

const AddDocumentsModal = ({ setOpen, addDocs, requestId }) => {
  const [documents, updateDocuments] = useState([])

  const onDocChange = ({ keyName, name }) => {
    updateDocuments([...documents, { keyName, name }])
  }
  return (
    <ModalContainer>
      <DialogTitle>Add Additional Documents</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose files to upload</DialogContentText>
        <Row>
          <DocumentInput onChange={onDocChange} files="true" multiple />
          <DocumentList
            documents={documents}
            removeDoc={docName =>
              updateDocuments(
                documents.filter(({ keyName }) => keyName !== docName)
              )
            }
          />
        </Row>
        <DialogActions style={{ padding: 0 }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              documents.map(({ keyName, name }) =>
                addDocs({ variables: { input: { keyName, requestId, name } } })
              )
              setOpen(false)
            }}
          >
            Upload
          </Button>
        </DialogActions>
      </DialogContent>
    </ModalContainer>
  )
}

export default AddDocumentsModal
