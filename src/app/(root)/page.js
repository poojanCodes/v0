import React from 'react'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

const page = async () => {


  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-up')
  }

  return (
    <div>
      <Button>
        Welcome Authenticated user
      </Button>
      <UserButton />
    </div>
  )
}

export default page