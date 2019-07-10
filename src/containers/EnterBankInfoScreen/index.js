import React, { Component } from 'react'
import { connect } from 'react-redux'
import Background from '../../components/Background'
import Header from '../../components/Header'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import {
  StyledPlaidLink,
  PlaidLinkContainer,
  StyledText,
  StyledList,
  TextContainer,
  StyledHeaderText
} from './styles'
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
    this.props.addPayment({ key: 'plaidPublicTokens', value: this.state.token })
  }

  render() {
    const enabled = this.state.bank
    const { history } = this.props
    return (
      <Background style={{ backgroundColor: theme.colors.background }}>
        <Header
          text="Step 3 of 4: Link my bank account"
          color={theme.colors.header}
          style={{ alignSelf: 'center', paddingBottom: 20 }}
        />
        <TextContainer>
          <StyledHeaderText>
            Grant Circles use Plaid to link to your bank account information,
            including account balances and spending patterns. We do this in
            order to:
          </StyledHeaderText>
          <StyledList>
            <li>Provide you the most seamless and personalized service. </li>
            <li>
              Measure the positive impact we are having in the financial
              wellness of Grant Circles users so that we can expand the service
              to more workers just like like you.
            </li>
          </StyledList>
          <StyledHeaderText>
            Your trust and privacy are extremely important to us. We promise to:
          </StyledHeaderText>
          <StyledList>
            <li>Never collect any account numbers or passwords.</li>
            <li>
              Keep all information collected completely secure and confidential.
            </li>
            <li>
              Never share it with GreenPath or any third parties. Currently,
              linking your primary bank is required in order to have access to
              Grant Circles.
            </li>
          </StyledList>
          <StyledText>
            If you have questions or concerns, please email
            <a href="mailto:info@grantcircles.org">info@grantcircles.org</a>.
          </StyledText>
        </TextContainer>
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
        {this.state.token.length !== 0 && (
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
        )}
        {this.state.bank && (
          <PrimaryButton
            text="Continue"
            style={{
              backgroundColor: theme.colors.tertiary,
              color: theme.colors.primary
            }}
            onClick={() => history.push('/complete-profile')}
            disabled={!enabled}
          />
        )}
      </Background>
    )
  }
}

const BankInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterBankInfo)

export default BankInfo
