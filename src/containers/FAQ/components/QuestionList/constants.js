import React from 'react'
import ReasonsToRequest from './components/ReasonsToRequest'
import RequiredInformationAndDocumentation from './components/RequiredInformationAndDocumentation'
import ContactInfo from './components/ContactInfo'
import DataUsage from './components/DataUsage'
import TermsAndConditions from './components/TermsAndConditions'

export const Questions = [
  {
    id: 1,
    question: 'What is the GreenPath Grant Circle?',
    answer:
      'The Grant Circle was established and is managed by a small team of researchers and entrepreneurs at Capital Access Strategies, LLC, who are working on an initiative sponsored by the nonprofit organization The Workers Lab. Our mission is to improve the resources that working Americans have to address financial security challenges.'
  },
  {
    id: 2,
    question: 'Who manages the Grant Circle and why are we doing this?',
    answer:
      'The Grant Circle was established and is managed by a small team of researchers and entrepreneurs at Capital Access Strategies, LLC. Our mission is to improve the resources that working Americans have to address financial security challenges.'
  },
  {
    id: 3,
    question: 'How does the Grant Circle work?',
    answer:
      'If you experience a financial hardship, you can seek funds from the Grant Circle by submitting a request online. You can receive your first $400 in 1-2 business days by simply answering a few questions in the request form. This is a one-time benefit unless you contribute back into the fund. (For more detail, see Step 4 or the Frequently Asked Questions.) Beyond your first $400, you will be asked to submit documentation of your financial hardship. We review all requests within 1-2 business days, but the process can take up to 1-2 weeks if we need additional information from you. In such cases, a smaller amount of money may be made available to you sooner. You can donate to the fund at any time. When you do, up to $400 of your contributions will become available for you to request again without documentation (like your first $400). Contributions are accepted and grants are currently only made with PayPal.'
  },
  {
    id: 4,
    question: 'What can I request funds for from the Grant Circle?',
    answer: '',
    component: <ReasonsToRequest />
  },
  {
    id: 5,
    question: 'How is this different than insurance?',
    answer:
      'The Grant Circle is designed to be more flexible, though smaller scale, than a typical insurance product. We don’t charge you a premium or deductible in order to request support during a time of need. Instead, we seek voluntary contributions from you and your colleagues, and work with your employer, to fund the Grant Circle. However, the Grant Circle is not meant to substitute for things like health, auto, or property insurance, since we cannot provide large payouts for truly catastrophic events.'
  },
  {
    id: 6,
    question: 'How is this different than a loan?',
    answer:
      'While you are encouraged to “pay it forward” by contributing back into the Grant Circle, doing so is completely voluntary. The Grant Circle does not have any repayment terms and does not charge you interest. '
  },
  {
    id: 7,
    question:
      'Can funds be used for dependents or other members of my household?',
    answer:
      'Yes, Grant Circle funds may be used for expenses that you are responsible for, due to caring for dependents or other members of your household. '
  },
  {
    id: 8,
    question:
      'Is there a maximum amount that I can receive from the Grant Circle?',
    answer:
      'Since the Grant Circle is currently in a pilot phase, supported by a limited pool of funds, the support we are able to provide is limited to the resources in the pool.  Request approvals are limited to the amount we could offer to all pilot participants. In other words, approvals are limited to the total pool of funds divided by the number of pilot participants. This is to ensure fairness across members of the Grant Circle.  However, since we are in a learning phase, we encourage participants to request funds in the amount they need, and we will do our best to fulfill requests.  Participants should be aware, though, that even requests that meet our eligibility criteria may only be partially fulfilled, given funding limitations at this stage.'
  },
  {
    id: 9,
    question: 'Is there a maximum number of times I can request funds?',
    answer:
      'Funds are not limited by the number of requests; they are limited by the total amount requested to date by each member, taking into account member contributions. '
  },
  {
    id: 10,
    question: 'Do I need a PayPal account in order to participate?',
    answer:
      'Currently, contributions and fund requests can only be made with PayPal. We are working on supporting additional payments options, but you will need a PayPal account in order to participate in this pilot.'
  },
  {
    id: 11,
    question:
      'What information and documentation is required for fund requests, and why?',
    answer: '',
    component: <RequiredInformationAndDocumentation />
  },
  {
    id: 12,
    question: 'How long does it take for requests for funds to be evaluated?',
    answer:
      'We review all requests in 1-2 business days. We make an effort to also review requests on weekends, but requests submitted on Fridays may not be fully reviewed until the following Monday. For requests where documentation is needed and we do not receive it, or where the documentation is insufficient, we will request additional information from you. This process may take up to 1-2 weeks, depending on when we receive documentation.'
  },
  {
    id: 13,
    question: 'How is my data used?',
    answer: '',
    component: <DataUsage />
  },
  {
    id: 14,
    question: 'How is my data protected?',
    answer:
      'We take several measures to protect participant data and ensure privacy. The Grant Circle development platform utilizes Amazon Web Services (AWS) architecture. All backend servers and databases are equipped with Security Groups and are encrypted with a Key Management Service. We also implement native measures including hashing passwords with industry-standard cryptographic JavaScript libraries (bcrypt) so that neither the owners of the database nor potential intruders can access passwords or other user data.'
  },
  {
    id: 15,
    question:
      'Where do contributions go? And how do they work? Is there a minimum amount that I can contribute?',
    answer:
      'When you contribute into the Grant Circle, two things happen. First, an amount equivalent to your contribution  becomes immediately accessible for you to request (up to $400) without providing documentation, similar to your first $400 of requests. Second, contributions are used to grow the fund to meet the needs of your co-workers. There is no minimum contribution amount. We (Capital Access Strategies, LLC and your participating colleagues) appreciate whatever contributions you make.'
  },
  {
    id: 16,
    question: 'What is the tax status of my contributions?',
    answer:
      'At this time, Grant Circle does not provide contributors with contribution receipts for tax purposes. Hence, contributions should not be considered tax deductible for those who itemize charitable contributions on their tax returns. (For reference, standard deduction amounts in 2019 are $12,200 for individuals, $18,350 for heads of household, and $24,400 for married couples filing jointly and surviving spouses. If you take the standard deduction, you do not need to itemize charitable contributions.)'
  },
  {
    id: 17,
    question: 'Why is this a pilot and what does that mean?',
    answer:
      'We are pilot-testing the Grant Circles product in order to understand whether and how it impacts the financial health of workers, and what impact it has on workplace metrics, such as turnover and worker productivity. The information collected during this and other pilots help us address key hypotheses and determine the future direction of the Grant Circles product. A pilot means that only a small group of workers has access to the Grant Circles product, and for a defined period of time. In this case, we estimate that the pilot will last around 6 months, but that timeframe is dependent upon what occurs post pilot launch. We may expand the pilot to more of your colleagues, extend the pilot, and/or end the pilot before the 6 months, depending upon a number of factors, including funds availability.'
  },
  {
    id: 18,
    question:
      'Who can I contact if I have more questions, suggestions, or feedback?',
    answer: '',
    component: <ContactInfo />
  },
  {
    id: 19,
    question:
      'Grant Circle’s Full Terms and Conditions and Data Sharing Policy',
    answer: '',
    component: <TermsAndConditions />
  }
]
