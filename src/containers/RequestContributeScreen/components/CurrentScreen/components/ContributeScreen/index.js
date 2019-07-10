import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { withAlert } from 'react-alert'
import apolloClient from '../../../../../../client'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import Subheader from '../../../../../../components/Subheader'
import BodyText from '../../../../../../components/BodyText'
import Background from '../../../../../../components/Background'
import FormWrapper from '../../../../../../components/FormWrapper'
import TextInput from '../../../../../../components/TextInput'
import Row from '../../../../../../components/Row'
import { Span } from '../RequestScreen/styles'
import { GET_USER, PAYMENT } from './graphql'
import LoadingIcon from '../../../../../../components/LoadingIcon'

class ContributeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0
    }
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
      console.log('The payment has succeeded!', payment)
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
    }

    const onCancel = data => {
      console.log('The payment was cancelled!', data)
      this.props.alert.show('The payment was cancelled')
    }

    const onError = err => {
      console.log('Error!', err)
      this.props.alert.error('The payment has failed!')
    }

    const env = 'sandbox'
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
          <Subheader
            text="Worker contributions will help ensure the Grant Circle can support more workers like you."
            style={{ marginBottom: 30 }}
          />
          <Query query={GET_USER}>
            {({ loading, data, error }) => {
              if (loading) return <LoadingIcon />
              if (error) return `Error! ${error.messsage}`
              const { user } = data.viewer
              if (user.requests)
                return (
                  <Subheader
                    text={`Worker Contributions also supported your requests of $${user.requests.toFixed(
                      2
                    )}`}
                    style={{ marginBottom: 30 }}
                  />
                )
              return null
            }}
          </Query>

          <Subheader text="How much would you like to contribute back into the Grant Circle? " />
          <Row justifyContent="flex-start">
            <Span>$</Span>
            <TextInput
              type="number"
              labelText="Enter Amount "
              rootStyle={{ alignSelf: 'center' }}
              name="amount"
              onChange={this.onChange}
            />
          </Row>
          <PaypalExpressBtn
            env={env}
            client={client}
            currency={currency}
            total={Number(this.state.amount)}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
          />
        </FormWrapper>
      </Background>
    )
  }
}

export default withAlert()(ContributeScreen)
