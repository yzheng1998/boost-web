const pattern = /^[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](greenpath.com|clarifi.org|ruraldynamics.org|HPFhome.org)$/

const constraints = {
  workEmail: {
    presence: true,
    format: {
      pattern
    }
  }
}

export default constraints
