// Add global styles and fonts here
import { load } from 'webfontloader'

load({
  google: {
    families: ['Neue Helvetica: 500, 600']
  }
})

const theme = {
  colors: {
    background: '#F3F3F3',
    backgroundSecondary: '#0FACF3',
    header: '#73A040',
    headerSecondary: 'white',
    primary: 'white',
    secondary: '#A2AEBB',
    tertiary: '#88C040',
    quaternary: '#C05746',
    black: '#071013',
    error: 'rgb(227, 81, 65)',
    grey: '#DFE0E2',
    darkGrey: '#8D8D8D'
  },
  breakpoints: {
    mobile: {
      floor: '700px',
      ceiling: '701px'
    }
  },
  fonts: {
    medium: {
      family: 'Helvetica Neue, Helvetica, Roboto, Arial, sans serif',
      weight: 500
    }
  }
}

export default theme
