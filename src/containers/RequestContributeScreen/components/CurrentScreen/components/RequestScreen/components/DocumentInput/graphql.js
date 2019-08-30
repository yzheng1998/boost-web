import gql from 'graphql-tag'

const SIGN_S3_URL = gql`
  mutation signS3Url($signS3UrlInput: SignS3UrlInput!) {
    signS3Url(signS3UrlInput: $signS3UrlInput) {
      url
      keyName
      error {
        message
      }
    }
  }
`
export default SIGN_S3_URL
