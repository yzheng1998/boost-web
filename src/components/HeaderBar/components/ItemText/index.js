import React from 'react'
import { ListItemText, Typography } from '@material-ui/core'

const ItemText = ({ text }) => (
  <ListItemText
    disableTypography
    primary={
      <Typography
        type="body"
        style={{
          color: '#808080'
        }}
      >
        {text}
      </Typography>
    }
  />
)

export default ItemText
