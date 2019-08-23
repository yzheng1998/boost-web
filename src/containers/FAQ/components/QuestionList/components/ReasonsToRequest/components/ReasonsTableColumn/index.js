import React from 'react'
import { ColumnContainer } from './styles'
import { Typography } from '@material-ui/core'

const ReasonsTableColumn = ({ reasons, header }) => (
  <ColumnContainer>
    <Typography>{header}</Typography>
    <ul>
      {reasons.map(reason => (
        <li>{reason}</li>
      ))}
    </ul>
  </ColumnContainer>
)

export default ReasonsTableColumn
