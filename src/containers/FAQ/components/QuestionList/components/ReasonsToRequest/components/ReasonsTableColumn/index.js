import React from 'react'
import { ColumnContainer } from './styles'
import { Typography } from '@material-ui/core'

const RenderedList = ({ reasons }) => (
  <ul>
    {reasons.map(reason => (
      <li>{reason}</li>
    ))}
  </ul>
)

const ReasonsTableColumn = ({ reasons, header }) => (
  <ColumnContainer>
    <Typography>{header}</Typography>
    <RenderedList reasons={reasons} />
  </ColumnContainer>
)

export default ReasonsTableColumn
