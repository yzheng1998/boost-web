const presence = {
  allowEmpty: false,
  message: '^Cannot be blank'
}

const constraints = {
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
