import React, { Component } from 'react'
import { Query } from 'react-apollo'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import Subheader from '../../../../components/Subheader'
import BodyText from '../../../../components/BodyText'
import Background from '../../../../components/Background'
import FormWrapper from '../../../../components/FormWrapper'
import TextInput from '../../../../components/TextInput'
import Row from '../../../../components/Row'
import { Span } from '../RequestScreen/styles'
import { GET_USER } from './graphql'

export default class ContributeScreen extends Component {
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
    const onSuccess = payment => {
      console.log('The payment was succeeded!', payment)
    }

    const onCancel = data => {
      console.log('The payment was cancelled!', data)
    }

    const onError = err => {
      console.log('Error!', err)
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
            text="How much would you like to contribute?"
            style={{ marginBottom: 30 }}
          />
          <BodyText
            text="Worker contributions to this fund have given your colleagues access to $50000 in financial support during times of hardship"
            style={{ marginBottom: 30 }}
          />
          <Query query={GET_USER}>
            {({ loading, data, error }) => {
              if (loading) return 'Loading data...'
              if (error) return `Error! ${error.messsage}`
              const { user } = data.viewer
              return (
                <Subheader
                  text={`Worker Contributions have also funded your grant of $${user.requests.toFixed(
                    2
                  )} on July 15th, 2019`}
                  style={{ marginBottom: 30 }}
                />
              )
            }}
          </Query>

          <Subheader text="One time contribution: " style={{ marginTop: 50 }} />
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
