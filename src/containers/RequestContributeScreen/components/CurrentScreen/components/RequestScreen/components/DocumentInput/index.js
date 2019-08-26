import React from 'react'
import axios from 'axios'
import { withAlert } from 'react-alert'
import Dropzone from 'react-dropzone'
import SIGN_S3_URL from './graphql'
import client from '../../../../../../../../client'
import PrimaryButton from '../../../../../../../../components/PrimaryButton'

const DocumentInput = ({ onChange, alert, ...rest }) => {
  const uploadPhoto = file => {
    const options = {
      headers: {
        'Content-Type': file.type
      }
    }
    client
      .mutate({
        mutation: SIGN_S3_URL,
        variables: {
          signS3UrlInput: { fileName: file.name, contentType: file.type }
        }
      })
      .then(async ({ data }) => {
        const {
          signS3Url: { url }
        } = data
        await axios
          .put(url, file, options)
          .then(() => onChange({ url, name: file.name }))
          .catch(() => alert.error('Could not upload file'))
      })
  }
  return (
    <Dropzone onDrop={file => uploadPhoto(file[0])}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input
            {...getInputProps()}
            type="file"
            accept=".pdf, image/png, image/jpeg"
            rootstyle={{ alignSelf: 'center' }}
            name="documents"
            {...rest}
          />
          <PrimaryButton style={{ width: '100%' }} text="Choose files" />
        </div>
      )}
    </Dropzone>
  )
}

export default withAlert()(DocumentInput)
