const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*?])([a-zA-Z0-9?!@#$%^&*]+)$/
const constraints = {
  password: {
    presence: true,
    format: {
      pattern,
      message: '^Please provide a valid password'
    },
    length: {
      minimum: 8,
      message: '^\nPassword is too short'
    }
  },
  personalEmail: {
    presence: true,
    email: {
      message: '^Please provide a valid email'
    }
  },
  confirmPassword: {
    presence: true,
    equality: {
      attribute: 'password',
      message: '^Password does not match'
    }
  }
}
export default constraints
