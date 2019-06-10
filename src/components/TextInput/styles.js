import theme from '../../theme'

const styles = {
  root: {},
  cssLabel: {
    '&$cssFocused': {
      color: theme.colors.secondary
    }
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: theme.colors.secondary
    }
  },
  input: {
    width: 300
  },
  cssError: {
    color: theme.colors.error
  }
}

export default styles
