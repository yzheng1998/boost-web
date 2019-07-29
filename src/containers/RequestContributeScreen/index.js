import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Background from '../../components/Background'
import { styles } from './styles'
import theme from '../../theme'
import CurrentScreen from './components/CurrentScreen'

const LOADING = 2

class CenteredTabs extends React.Component {
  state = {
    tab: LOADING
  }

  componentDidMount = () => {
    const history = this.props
    if (history.location.state) {
      this.setState({ tab: history.location.state.request })
    }
  }

  onChange = (event, tab) => {
    this.setState({ tab })
  }

  render() {
    const { classes, history } = this.props
    const { tab } = this.state

    return (
      <Background
        style={{
          backgroundColor: theme.colors.background,
          justifyContent: 'flex-start'
        }}
      >
        <Paper className={classes.root}>
          <Tabs
            value={tab}
            onChange={this.onChange}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="Request" />
            <Tab label="Contribute" />
          </Tabs>
        </Paper>
        <CurrentScreen
          setState={p => this.setState(p)}
          tab={this.state.tab}
          history={history}
        />
      </Background>
    )
  }
}

export default withStyles(styles)(CenteredTabs)
