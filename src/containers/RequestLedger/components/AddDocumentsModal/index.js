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

  const onDocChange = ({ url, name }) => {
    updateDocuments([...documents, { url, name }])
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
              updateDocuments(documents.filter(({ name }) => name !== docName))
            }
          />
        </Row>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              documents.map(({ url, name }) =>
                addDocs({ variables: { input: { url, requestId, name } } })
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
