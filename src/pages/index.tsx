import * as React from 'react'

import {Helmet} from "react-helmet"

export const P1 = () => {
  return (
    <>
      <Helmet
        title={'p1'}
        meta={[
          { name: 'twitter:card', content: 'summary' }
        ]}
      />
      p1
    </>
  )
    }

export const P2 = () => {
  return (
    <>
      <Helmet
        title={'p2'}
      />
      p2
    </>
  )
}
