const constraints = {
  password: {
    presence: { message: '^Cannot be blank' },
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
