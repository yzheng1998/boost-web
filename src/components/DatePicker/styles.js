import themes from '../../theme'

export const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
    marginBottom: 15
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: 200
  },
  cssError: {
    color: themes.colors.error
  }
})
