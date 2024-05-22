"use client"

import { SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='w-full h-full flex'>
        <div className='h-10'>
          <UserButton/>
        </div>
      </div>
    </div>
  )
}

export default About
