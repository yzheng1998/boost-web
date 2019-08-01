const constraints = {
  password: {
    presence: true,
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
