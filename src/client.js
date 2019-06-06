import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import config from './config'
import store from 'store'

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const user = store.get('user')
  const token = user ? user.token : null
  if (token) {
    operation.setContext({
      headers: {
        authorization: token
      }
    })
  }
  return forward(operation)
})

const client = new ApolloClient({
  link: ApolloLink.from([
    authMiddleware,
    new HttpLink({
      uri: config.graphqlUrl,
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
})

export default client
