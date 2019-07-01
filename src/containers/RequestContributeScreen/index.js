import React from 'react'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Background from '../../components/Background'
import RequestScreen from './components/RequestScreen'
import ContributeScreen from './components/ContributeScreen'
import LoadingIcon from '../../components/LoadingIcon'
import { styles } from './styles'
import theme from '../../theme'
import { GET_USER } from './graphql'

class CenteredTabs extends React.Component {
  state = {
    contributions: 0,
    requests: 0,
    payPalEmail: '',
    value: 0
  }

  componentDidMount = () => {
    this.setState({ value: 2 })
  }

  onChange = (event, value) => {
    this.setState({ value })
  }

  handleError = ({ message }) => {
    console.error(message)
    return 'An error occurred!'
  }

  computeBalance = ({ requests, contributions }) =>
    (1000 - requests + contributions).toFixed(2)

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
        <Query
          query={GET_USER}
          onCompleted={data => {
            this.setState({
              contributions: data.viewer.user.contributions,
              requests: data.viewer.user.requests,
              payPalEmail: data.viewer.user.personalEmail
            })
          }}
        >
          {({ loading, data, error }) => {
            if (loading) return <LoadingIcon />
            if (error) {
              this.handleError(error)
            }
            const { user } = data.viewer

            const balance = this.computeBalance(user)

            if (value === 0) {
              return (
                <RequestScreen
                  data={this.state}
                  balance={balance}
                  history={this.props.history}
                />
              )
            } else if (value === 1) {
              return <ContributeScreen />
            }

            if (balance === '1000.00') {
              this.setState({ value: 0 })
              return (
                <RequestScreen
                  data={this.state}
                  balance={balance}
                  history={this.props.history}
                />
              )
            }
            this.setState({ value: 1 })
            return <ContributeScreen />
          }}
        </Query>
      </Background>
    )
  }
}

export default withStyles(styles)(CenteredTabs)
