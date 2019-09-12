import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import ReactGA from 'react-ga'
import apolloClient from '../../../../../../client'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import Subheader from '../../../../../../components/Subheader'
import Background from '../../../../../../components/Background'
import FormWrapper from '../../../../../../components/FormWrapper'
import TextInput from '../../../../../../components/TextInput'
import Header from '../../../../../../components/Header'
import Row from '../../../../../../components/Row'
import theme from '../../../../../../theme'
import { Span } from '../RequestScreen/styles'
import { PAYMENT } from './graphql'
import config from '../../../../../../config'

ReactGA.initialize(config.gaTrackingCode)

class ContributeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: null
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0)
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const client = {
      sandbox:
        'AWgi5rBnomKUXPXBbo6qcWCO503j5hei7DOjAfqKqkCoMTvXIHROi92enkNPoWcVaFPe0XkW0eMzYdXQ',
      production:
        'AS9vvZrYslvm34pUsOcsT_rUntr-msY2GkSsEJYB9kyk8WzsDHzf3-5bvuTdZM_Gu-X6xs3Iu9cLC-1j'
    }
    const onSuccess = async payment => {
      ReactGA.event({
        category: 'Contributions',
        action: 'Contribution Made'
      })
      this.props.alert.success('The payment has succeeded!')

      try {
        await apolloClient.mutate({
          mutation: PAYMENT,
          variables: {
            input: {
              amount: Number(this.state.amount),
              payerId: String(payment.payerID),
              paymentId: String(payment.paymentID)
            }
          }
        })
      } catch (error) {
        throw error
      }

      this.setState({ amount: '' })
    }

    const onCancel = () => {
      this.props.alert.show('The payment was cancelled')
    }

    const onError = () => {
      this.props.alert.error('The payment has failed!')
    }

    const env = 'production'
    const currency = 'USD'

    return (
      <Background style={{ justifyContent: 'flex-start', marginBottom: 20 }}>
        <FormWrapper
          style={{
            justifyContent: 'flex-start',
            paddingRight: 30,
            paddingLeft: 30,
            marginTop: 30
          }}
        >
          <Header
            text="Contribute to the Grant Circle"
            color={theme.colors.header}
          />
          <Subheader
            text="The Grant Circle launched with funding from a charitable donation. Contributions from workers like you can help it grow and reach more members of your workplace community."
            style={{ marginBottom: 30, textAlign: 'justify' }}
          />
          <Subheader
            text="In addition to helping support the Grant Circle generally, your contributions enable you to request additional funds without documentation. When you contribute to the fund, up to $400 of your contributions will become available for you to request again without submitting documentation (like the first $400 requested)."
            style={{ marginBottom: 30, textAlign: 'justify' }}
          />

          <Subheader
            text="How much would like to contribute today?"
            style={{ textAlign: 'justify' }}
          />
          <Row justifyContent="flex-start">
            <Span>$</Span>
            <TextInput
              type="number"
              labelText="Enter Amount "
              rootStyle={{ alignSelf: 'center' }}
              name="amount"
              onChange={this.onChange}
              value={this.state.amount}
            />
          </Row>
          {this.state.amount && (
            <PaypalExpressBtn
              env={env}
              client={client}
              currency={currency}
              total={Number(this.state.amount)}
              onError={onError}
              onSuccess={onSuccess}
              onCancel={onCancel}
            />
          )}
        </FormWrapper>
      </Background>
    )
  }
}

export default withAlert()(ContributeScreen)
