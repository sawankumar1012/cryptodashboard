import React from 'react'
import { twMerge } from 'tailwind-merge'
export const Card = ({children,className,variant='outline',size='sm',...restprops}) => {
  const sizes={
    'sm':'min-h-[11vh]',
    'md':'h-10',
    'lg':'h-15',
    'xl':'mx-auto px-10 py-8 bg-white rounded-md h-[35vh] min-h-[200px] relative shadow-md w-full',
  }
  return (
    <div className={twMerge( `${sizes[size]} shadow-md w-full`,`${className}`)} {...restprops}>
        {children}
    </div>
  )
}
