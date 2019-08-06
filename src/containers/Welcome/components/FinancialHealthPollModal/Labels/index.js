import React from 'react'
import { Typography } from '@material-ui/core'
import LabelWrapper from './styles'

const Labels = () => (
  <LabelWrapper>
    <Typography style={{ width: 100 }}>Not stressed at all</Typography>
    <Typography style={{ width: 100 }}>
      Normal level of financial stress
    </Typography>
    <Typography style={{ width: 70 }}>Extremely stressed</Typography>
  </LabelWrapper>
)

export default Labels
