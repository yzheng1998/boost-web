import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Background from '../../components/Background'
import RequestScreen from './components/RequestScreen'
import ContributeScreen from './components/ContributeScreen'
import { styles } from './styles'
import theme from '../../theme'

class CenteredTabs extends React.Component {
  state = {
    value: 0
  }

  onChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <Background
        style={{
          backgroundColor: theme.colors.background,
          justifyContent: 'flex-start'
        }}
      >
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={this.onChange}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="Request" />
            <Tab label="Contribute" />
          </Tabs>
        </Paper>
        {value === 0 && <RequestScreen />}
        {value === 1 && <ContributeScreen />}
      </Background>
    )
  }
}

export default withStyles(styles)(CenteredTabs)
