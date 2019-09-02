import React, { useState } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ReactGA from 'react-ga'
import config from '../../../../config'
import { Questions } from './constants'

ReactGA.initialize(config.gaTrackingCode)

const QuestionList = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel, question) => (event, isExpanded) => {
    if (isExpanded) {
      setExpanded(panel)
      ReactGA.event({
        category: 'FAQ',
        action: question
      })
    } else {
      setExpanded(false)
    }
  }
  return Questions.map(({ id, question, answer, component }) => (
    <ExpansionPanel
      expanded={expanded === id}
      onChange={handleChange(id, question)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{ fontStyle: 'normal', fontWeight: 'bold' }}>
          {question}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {component || <Typography>{answer}</Typography>}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ))
}

export default QuestionList
