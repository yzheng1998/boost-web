const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

const constraints = {
  workEmail: {
    presence: true,
    format: {
      pattern
    }
  }
}

export default constraints
