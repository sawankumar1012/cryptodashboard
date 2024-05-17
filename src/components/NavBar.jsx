import React from 'react'
import { twMerge } from 'tailwind-merge'
export const NavBar = ({className='',children}) => {
  return (
    <div className={twMerge(`flex bg-white rounded-md w-full min-h-[50px] align-items-center justify-space-between`, `${className}`)}>
  
    {children}
  </div>
  )
}
