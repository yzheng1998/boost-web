import purple from '@material-ui/core/colors/purple'
import theme from '../../theme'

const styles = {
  root: {},
  cssLabel: {
    '&$cssFocused': {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500]
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
