import React from 'react'
import Funds from './components/Funds'
import GrantCircle from './components/GrantCircle'
import HowItWorks1 from './components/HowItWorks1'
import HowItWorks2 from './components/HowItWorks2'
import HowItWorks3 from './components/HowItWorks3'
import HowItWorks4 from './components/HowItWorks4'

// eslint-disable-next-line consistent-return
const ScreenSelector = ({ screen }) => {
  switch (screen) {
    case 0:
      return <GrantCircle />
    case 1:
      return <Funds />
    case 2:
      return <HowItWorks1 />
    case 3:
      return <HowItWorks2 />
    case 4:
      return <HowItWorks3 />
    case 5:
      return <HowItWorks4 />
    default:
      return null
  }
}

export default ScreenSelector
