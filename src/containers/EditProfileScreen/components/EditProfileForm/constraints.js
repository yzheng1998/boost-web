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
  },
  birthday: {
    presence,
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 1850,
      lessThanOrEqualTo: 3000,
      notGreaterThanOrEqualTo: '^Invalid year'
    }
  },
  children: {
    presence,
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: '^Invalid number of children'
    }
  },
  adults: {
    presence,
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: '^Invalid number of adults'
    }
  },
  maritalStatus: { presence },
  secondaryIncome: { presence },
  householdIncome: {
    presence,
    numericality: {
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: '^Invalid household income'
    }
  },
  financialLife: { presence }
}

export default constraints
