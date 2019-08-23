const presence = {
  allowEmpty: false,
  message: '^Cannot be blank'
}

const constraints = {
  firstName: {
    presence
  },
  lastName: {
    presence
  }
}

export default constraints
