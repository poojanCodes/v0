'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ModeToggle from '@/components/mode-toggle'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs'

import { Show } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <nav className='p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent'>
            <div className='max-w-5xl mx-auto w-full flex justify-between items-center'>
                <Link href={'/'} className='flex items-center gap-2'>
                    <Image alt='v0' src={'/logo.svg'} width={32} height={32} className='shrink-0 invert dark:invert-0' />
                </Link>

                <Show when='signed-out'>
                    <div className='flex gap-2'>
                        <SignInButton forceRedirectUrl='/sign-in'>
                            <Button variant='outline' size='sm'>
                                Sign In
                            </Button>
                        </SignInButton>

                        <SignUpButton forceRedirectUrl='/sign-up'>
                            <Button size={'sm'}>
                                Sign Up
                            </Button>
                        </SignUpButton>

                    </div>
                    <ModeToggle />
                </Show>

                <Show when='signed-in'>
                    <div className='flex gap-9'>

                        <UserButton />

                        <ModeToggle />

                    </div>

                </Show>

            </div>
        </nav>
    )
}

export default Navbar