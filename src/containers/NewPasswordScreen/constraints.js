const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!@#$%^&*]+)$/
const constraints = {
  password: {
    presence: { message: '^Cannot be blank' },
    format: {
      pattern,
      message: '^\nPassword must have numbers and letters'
    },
    length: {
      minimum: 8,
      message: '^\nPassword is too short'
    }
  },
  confirmPassword: {
    presence: { message: '^Cannot be blank' },
    equality: {
      attribute: 'password',
      message: '^Password does not match'
    }
  }
}
export default constraints
