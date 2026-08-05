import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className='flex '>
      <section>
        <SignIn/>
      </section>
    </div>
  )
}

export default SignInPage