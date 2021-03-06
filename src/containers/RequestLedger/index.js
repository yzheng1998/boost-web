import React, { useState, forwardRef } from 'react'
import { Query, Mutation } from 'react-apollo'
import { useAlert } from 'react-alert'
import MaterialTable from 'material-table'
import { Dialog } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import moment from 'moment'
import { tableIcons, columns, actions } from './constants'
import { ADD_DOCUMENT, REMOVE_DOCUMENT, VIEWER } from './graphql'
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
      documents: documents || '',
      requestId: uuid,
      status
    }))

  const handleAddClick = requestId => {
    setOpen(true)
    setSelectedRequestId(requestId)
  }

  return (
    <Query query={VIEWER}>
      {({ data }) => {
        if (data.viewer) {
          const formattedRequests = data.viewer.user
            ? formatData(data.viewer.user.requestHistory)
            : []
          return (
            <Mutation
              mutation={ADD_DOCUMENT}
              onCompleted={({ addDocumentToRequest: { success } }) => {
                if (!success) {
                  alert.error('Document name too long.')
                } else {
                  alert.success('Document added!')
                }
              }}
              onError={() => alert.error('Failed to add documents.')}
              refetchQueries={[{ query: VIEWER }]}
            >
              {addDocumentToRequest => (
                <Mutation
                  mutation={REMOVE_DOCUMENT}
                  onCompleted={() => alert.success('Document removed!')}
                  onError={() => alert.error('Failed to remove document.')}
                  refetchQueries={[{ query: VIEWER }]}
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
