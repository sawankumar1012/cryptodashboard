import React from 'react'
import { NavBar } from '../../NavBar'
import { CurrencySelector } from '../../CurrencySelector/CurrencySelector'

export const DashBoardNavBar = () => {
  return (
    <NavBar className='bg-transparent'>
     <CurrencySelector className={'bg-white py-1 px-4   rounded-lg shadow-sm max-w-[250px]'} />
    </NavBar>
  )
}
