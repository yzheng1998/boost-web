import React, { Component } from 'react'
import { connect } from 'react-redux'
import Background from '../../components/Background'
import Header from '../../components/Header'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { StyledPlaidLink, PlaidLinkContainer } from './styles'
import { addPayment } from '../../redux/actions'

const mapStateToProps = state => ({
  paymentInfo: state.paymentReducer
})

const mapDispatchToProps = dispatch => ({
  addPayment: info => dispatch(addPayment(info))
})

class EnterBankInfo extends Component {
  state = { bank: '', token: [], buttonActive: true }

  handleOnSuccess = (token, data) => {
    this.state.token.push(token)
    this.setState({
      bank: data.institution.name,
      buttonActive: false
    })
    this.props.addPayment({ key: 'plaidPublicToken', value: this.state.token })
  }

  render() {
    const enabled = this.state.bank
    const { history } = this.props
    return (
      <Background
        style={{ backgroundColor: theme.colors.primary, paddingTop: 50 }}
      >
        <Header
          text="Enter Bank Info"
          color={theme.colors.tertiary}
          style={{ alignSelf: 'center' }}
        />
        <PlaidLinkContainer>
          <StyledPlaidLink
            active={this.state.buttonActive}
            clientName="Boost"
            env="sandbox"
            product={['auth', 'transactions']}
            publicKey="fce3ab4dab4752ede9cb3363e3c575"
            onExit={this.handleOnExit}
            onSuccess={this.handleOnSuccess}
          >
            {!this.state.token.length &&
              `Press here to connect to your bank with Plaid`}
            {this.state.token.length === 1 &&
              `Connected${this.state.bank && ` to ${this.state.bank}`}`}
            {this.state.token.length > 1 &&
              `Connected to ${this.state.token.length} accounts`}
          </StyledPlaidLink>
        </PlaidLinkContainer>
        <PlaidLinkContainer>
          <StyledPlaidLink
            active
            clientName="Boost"
            env="sandbox"
            product={['auth', 'transactions']}
            publicKey="fce3ab4dab4752ede9cb3363e3c575"
            onExit={this.handleOnExit}
            onSuccess={this.handleOnSuccess}
          >
            Connect to more accounts
          </StyledPlaidLink>
        </PlaidLinkContainer>
        <PrimaryButton
          text="Continue"
          style={{
            backgroundColor: theme.colors.tertiary,
            color: theme.colors.primary
          }}
          onClick={() => history.push('/complete-profile')}
          disabled={!enabled}
        />
      </Background>
    )
  }
}

const BankInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterBankInfo)

export default BankInfo
