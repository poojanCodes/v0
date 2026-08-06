import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    
      <section className='flex absolute top-18 left-110'>
        <SignIn/>
      </section>
  )
}

export default SignInPage