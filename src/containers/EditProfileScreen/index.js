import React, { Component } from 'react'
import { Query } from 'react-apollo'

import Background from '../../components/Background'
import EditProfileForm from './components/EditProfileForm'
import theme from '../../theme'
import { GET_USER } from './graphql'
import LoadingIcon from '../../components/LoadingIcon'

class EditProfileScreen extends Component {
  render() {
    return (
      <Background
        style={{
          backgroundColor: theme.colors.tertiary,
          paddingTop: 50,
          justifyContent: 'flex-start'
        }}
      >
        <Query query={GET_USER}>
          {({ loading, data, error }) => {
            if (loading) return <LoadingIcon />
            if (error) return `Error! ${error.messsage}`
            const { user } = data.viewer
            return <EditProfileForm user={user} history={this.props.history} />
          }}
        </Query>
      </Background>
    )
  }
}

export default EditProfileScreen
