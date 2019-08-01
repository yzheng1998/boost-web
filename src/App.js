import React from 'react'
import { ApolloProvider } from 'react-apollo'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import AlertTemplate from 'react-alert-template-basic'
import localStore from 'store'
import theme from './theme'
import client from './client'
import HowItWorks from './containers/HowItWorksScreen'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import UserDetailsScreen from './containers/UserDetailsScreen'
import PasswordScreen from './containers/PasswordScreen'
import WorkEmailScreen from './containers/WorkEmailScreen'
import LoginScreen from './containers/LoginScreen'
import EnterBankInfoScreen from './containers/EnterBankInfoScreen'
import CompleteProfileScreen from './containers/CompleteProfileScreen'
import EditProfileScreen from './containers/EditProfileScreen'
import RequestContributeScreen from './containers/RequestContributeScreen'
import HeaderBar from './components/HeaderBar'
import EmailRecoveryScreen from './containers/EmailRecoveryScreen'
import VerificationCodeScreen from './containers/VerificationCodeScreen'
import NewPasswordScreen from './containers/NewPasswordScreen'
import ExplanationScreen from './containers/ExplanationScreen'
import PageFooter from './components/PageFooter'
import FAQ from './containers/FAQ'
import Welcome from './containers/Welcome'
import RequestLedger from './containers/RequestLedger'

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.tertiary
    },
    secondary: {
      main: theme.colors.secondary
    }
  }
})

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStore.get('user') ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <ThemeProvider theme={theme}>
              <MuiThemeProvider theme={MuiTheme}>
                <ApolloProvider client={client}>
                  <AlertProvider template={AlertTemplate} {...options}>
                    <div className="App">
                      <HeaderBar />
                      <Switch>
                        <PrivateRoute
                          exact
                          path="/howItWorks"
                          component={HowItWorks}
                        />
                        <PrivateRoute
                          exact
                          path="/explanation"
                          component={ExplanationScreen}
                        />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/register" component={WorkEmailScreen} />
                        <Route
                          path="/register-cont"
                          component={PasswordScreen}
                        />
                        <Route path="/details" component={UserDetailsScreen} />
                        <Route
                          path="/bank-info"
                          component={EnterBankInfoScreen}
                        />
                        <Route
                          path="/complete-profile"
                          component={CompleteProfileScreen}
                        />
                        <Route
                          path="/recovery"
                          component={EmailRecoveryScreen}
                        />
                        <Route
                          path="/verification"
                          component={VerificationCodeScreen}
                        />
                        <Route
                          path="/new-password"
                          component={NewPasswordScreen}
                        />
                        <PrivateRoute
                          path="/profile"
                          component={EditProfileScreen}
                        />
                        <PrivateRoute
                          path="/request"
                          component={RequestContributeScreen}
                        />
                        <PrivateRoute
                          path="/activity"
                          component={RequestLedger}
                        />
                        <Route path="/faq" component={FAQ} />
                        <PrivateRoute path="/welcome" component={Welcome} />
                        <Redirect from="/" to="/request" />
                      </Switch>
                      <PageFooter />
                    </div>
                  </AlertProvider>
                </ApolloProvider>
              </MuiThemeProvider>
            </ThemeProvider>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
