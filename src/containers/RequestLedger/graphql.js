import gql from 'graphql-tag'

export const VIEWER = gql`
  query viewer {
    viewer {
      user {
        uuid
        requestHistory {
          uuid
          amount
          documents {
            id
            name
            createdAt
            url
          }
          status
          createdAt
        }
      }
      error {
        message
      }
      success
    }
  }
`

export const ADD_DOCUMENT = gql`
  mutation addDocumentToRequest($input: AddDocumentToRequestInput!) {
    addDocumentToRequest(input: $input) {
      success
      document {
        id
        url
        createdAt
      }
    }
  }
`

export const REMOVE_DOCUMENT = gql`
  mutation removeDocumentFromRequest($documentId: ID!) {
    removeDocumentFromRequest(documentId: $documentId)
  }
`
