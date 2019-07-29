import React from 'react'
import MaterialTable from 'material-table'
import { tableIcons, columns, actions } from './constants'

const RequestLedger = ({ data }) => (
  <MaterialTable
    columns={columns}
    options={{ filtering: true, actionsColumnIndex: -1 }}
    icons={tableIcons}
    actions={actions}
    title="Requests"
    data={data}
    style={{ width: '100%' }}
  />
)

export default RequestLedger
