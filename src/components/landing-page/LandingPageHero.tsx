import React from 'react'
import MaxWidthWrapper from '../wrappers/MaxWidthWrapper'
import { Button } from '../ui/button'

export default function LandingPageHero() {
  return (
    <MaxWidthWrapper className='md:mt-20 md:mb-10'>
      <Button>100% Free</Button>
      <h1 className='md:my-4 md:text-7xl font-bold max-w-screen-sm mx-auto'>One Page Web Application</h1>
      <h2 className='max-w-screen-sm mx-auto text-md'>Start up your tool webapp in a minimal style. Get better SEO room at the same time!</h2>
    </MaxWidthWrapper>
  )
}
