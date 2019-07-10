const presence = {
  allowEmpty: false,
  message: '^Cannot be blank '
}

const constraints = {
  amount: {
    presence,
    numericality: {
      greaterThan: 0,
      lessThanOrEqualTo: 1000
    }
  },
  hardshipExplanation: {
    presence
  },
  hardshipDate: {
    presence
  },
  additionalInfo: {
    presence
  },
  payPalEmail: {
    presence,
    email: {
      message: '^Please provide a valid email'
    }
  }
}

export default constraints
