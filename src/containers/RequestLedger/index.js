import React, { useState, forwardRef } from 'react'
import { Query, Mutation } from 'react-apollo'
import { useAlert } from 'react-alert'
import MaterialTable from 'material-table'
import { Dialog } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import moment from 'moment'
import { tableIcons, columns, actions } from './constants'
import { ADD_DOCUMENT, REMOVE_DOCUMENT, REQUESTS } from './graphql'
import AddDocumentsModal from './components/AddDocumentsModal'

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
))

const RequestLedger = () => {
  const [open, setOpen] = useState(false)
  const [selectedRequestId, setSelectedRequestId] = useState('')

  const alert = useAlert()

  const formatData = data =>
    data.map(({ createdAt, amount, documents, uuid, status }) => ({
      date: moment(Date(createdAt)).format('LLL'),
      amount: `$${amount}`,
      documents: documents
        ? documents.map(({ id }, index) => ({
            name: `Document ${index + 1}`,
            id
          }))
        : '',
      requestId: uuid,
      status
    }))

  const handleAddClick = requestId => {
    setOpen(true)
    setSelectedRequestId(requestId)
  }

  return (
    <Query query={REQUESTS}>
      {({ data, error }) => {
        if (error) {
          console.log('error')
        }

        if (data.requests) {
          const formattedRequests = formatData(data.requests)
          return (
            <Mutation
              mutation={ADD_DOCUMENT}
              onCompleted={() => alert.success('Documents added!')}
              onError={() => alert.error('Failed to add documents.')}
              refetchQueries={[{ query: REQUESTS }]}
            >
              {addDocumentToRequest => (
                <Mutation
                  mutation={REMOVE_DOCUMENT}
                  onCompleted={() => alert.success('Document removed!')}
                  onError={() => alert.error('Failed to remove document.')}
                  refetchQueries={[{ query: REQUESTS }]}
                >
                  {removeDocumentFromRequest => (
                    <>
                      <MaterialTable
                        columns={columns(removeDocumentFromRequest)}
                        options={{ filtering: true, actionsColumnIndex: -1 }}
                        icons={tableIcons}
                        actions={actions(handleAddClick)}
                        title="My Activity"
                        data={formattedRequests}
                        style={{ width: '100%' }}
                      />
                      <Dialog
                        open={open}
                        onClose={() => setOpen(false)}
                        TransitionComponent={Transition}
                      >
                        <AddDocumentsModal
                          setOpen={setOpen}
                          addDocs={addDocumentToRequest}
                          requestId={selectedRequestId}
                        />
                      </Dialog>
                    </>
                  )}
                </Mutation>
              )}
            </Mutation>
          )
        }

        return null
      }}
    </Query>
  )
}

export default RequestLedger
