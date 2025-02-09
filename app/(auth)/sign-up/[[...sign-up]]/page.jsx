import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Page  = () => {
  return (
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <SignUp />
      </div>
  )
}

export default Page;
