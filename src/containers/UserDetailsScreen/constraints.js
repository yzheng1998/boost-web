const phonePattern = /(\()?\d{3}(\))?(-)?\d{3}(-)?\d{4}/
const zipPattern = /\d{5}(-\d{4})?/

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
  },
  phone: {
    presence,
    format: {
      pattern: phonePattern,
      message: '^\nNot a valid phone number'
    }
  },
  zipCode: {
    presence,
    format: {
      pattern: zipPattern,
      message: '^\nNot a valid zip code'
    }
  }
}

export default constraints
