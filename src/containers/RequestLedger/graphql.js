import gql from 'graphql-tag'

export const REQUESTS = gql`
  query requests {
    requests {
      uuid
      amount
      documents {
        id
        url
        createdAt
        name
      }
      status
      createdAt
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
