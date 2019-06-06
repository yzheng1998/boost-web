const constraints = {
  workEmail: {
    presence: true,
    email: {
      message: '^Please provide a valid email'
    }
  }
}

export default constraints
