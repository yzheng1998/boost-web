import React from 'react'
import { useAlert } from 'react-alert'
import { Mutation } from 'react-apollo'
import SIGN_S3_URL from './graphql'
import { DocInput } from './styles'
import { FilePicker } from 'react-file-picker'
import PrimaryButton from '../../../../../../../../components/PrimaryButton'

const DocumentInput = () => {
  const alert = useAlert()

  const handleError = err => {
    alert.error(err)
  }
  return (
    <Mutation
      mutation={SIGN_S3_URL}
      // onCompleted={async data => {
      //   // const {
      //   //   signS3Url: { url }
      //   // } = data
      //   console.log(data)
      // }}
      onError={handleError}
    >
      {signS3Url => (
        <FilePicker
          extensions={['pdf']}
          onChange={FileObject => {
            const variables = {
              signS3UrlInput: {
                fileName: FileObject.name.split(' ').join(''),
                contentType: FileObject.type
              }
            }
            console.log(FileObject.uri)
            signS3Url({ variables })
          }}
          onError={errMsg => console.log(errMsg)}
        >
          <PrimaryButton>Click to upload markdown</PrimaryButton>
        </FilePicker>
      )}
    </Mutation>
  )
}

export default DocumentInput
