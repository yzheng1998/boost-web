// Add global styles and fonts here
import { load } from 'webfontloader'

load({
  google: {
    families: ['Neue Helvetica: 500, 600']
  }
})

const theme = {
  colors: {
    background: 'white',
    backgroundSecondary: '#0FACF3',
    header: '#0FACF3',
    headerSecondary: 'white',
    primary: 'white',
    secondary: '#A2AEBB',
    tertiary: '#0FACF3',
    quaternary: '#C05746',
    black: '#071013',
    error: 'rgb(227, 81, 65)',
    grey: '#DFE0E2'
  },
  breakpoints: {
    mobile: {
      floor: '700px',
      ceiling: '701px'
    }
  },
  fonts: {
    medium: {
      family: 'Neue Helvetica',
      weight: 500
    },
    semiBold: {
      family: 'Neue Helvetica',
      weight: 600
    }
  }
}

export default theme
