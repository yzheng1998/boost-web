import purple from '@material-ui/core/colors/purple'
import theme from '../../theme'

export default {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: 2
  },
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
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500]
    }
  },
  notchedOutline: {},
  cssError: {
    color: theme.colors.error
  }
}
