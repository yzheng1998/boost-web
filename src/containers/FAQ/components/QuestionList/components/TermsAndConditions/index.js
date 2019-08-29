import React from 'react'
import { TermsAndConditonsContainer } from './styles'
import { Typography } from '@material-ui/core'
import { consentList } from './constants'

const RenderedList = () => (
  <ul>
    {consentList.map(consent => (
      <li>
        <Typography>{consent}</Typography>
      </li>
    ))}
  </ul>
)

const TermsAndConditions = () => (
  <TermsAndConditonsContainer>
    <p>
      <Typography>
        The Grant Circle Pilot (pilot) is a research initiative operated by
        Capital Access Strategies, LLC on behalf of The Worker’s Lab. The pilot
        is designed to test a solution for providing strategic cash infusions to
        workers that emerged out of research into the lives of working
        Americans. It is scheduled to launch in September 2019; the duration of
        the pilot is uncertain and wider adoption is not guaranteed.
      </Typography>
    </p>
    <p>
      <Typography>
        The Grant Circle started with a donation from a charitable foundation
        and, as a result, has a limited amount of money which will be drawn down
        by employee requests and expanded by employee contributions. The pilot
        can not guarantee access to funds. Pilot participant requests will be
        evaluated in accordance with fund use guidelines and funded as the
        shared pool of funds permits.
      </Typography>
    </p>
    <p>
      <Typography>
        A major objective of the pilot is to learn about the impact of funds
        disbursed to help with financial hardship. In particular, Capital Access
        Strategies seeks to understand the financial health impact to pilot
        participants, and potential workplace impact, such as employee retention
        and productivity. To support the research objectives, data on
        participants’ behavior, fund usage, and workplace outcomes are collected
        from surveys, web forms and metadata, and from the participants’
        employer. By participating in the pilot, participants consent to:
      </Typography>
    </p>
    <RenderedList />
    <Typography>
      Capital Access Strategies seeks to protect participant data and privacy by
      taking the following information security measures. The Grant Circle
      development platform utilizes Amazon Web Services (AWS) architecture. All
      backend servers and databases are equipped with Security Groups and are
      encrypted with a Key Management Service. Capital Access Strategies
      implements native measures including hashing passwords with
      industry-standard cryptographic JavaScript libraries (bcrypt) so that
      neither the owners of the database nor potential intruders can access
      passwords or other user data.
    </Typography>
  </TermsAndConditonsContainer>
)

export default TermsAndConditions
