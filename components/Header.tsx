import {
    SignUpButton,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Image from 'next/image'
import { Button } from './ui/button'
import HeaderMenu from './header-menu'

const Header = () => {
  return (
    <header className='sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/20 backdrop-blur-md'>
        <div className='w-full max-w-screen-xl px-5 lg:px-20 mx-auto relative border-b'>
            <div className="flex h-14 items-center justify-between">
                <Image src='/logo.png' alt='logo' width={100} height={100}/>
                <div>
                    <SignedOut>
                        <SignInButton>
                            <Button>Sign In</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button className='ml-2'>Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <HeaderMenu />
                        <UserButton />
                    </SignedIn>
                </div>
            </div> 
        </div>
         
    </header>
    
  )
}

export default Header