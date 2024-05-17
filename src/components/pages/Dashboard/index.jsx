import React from 'react'
import { DashBoardNavBar } from './DashBoardNavBar'
import { ChartView } from '../../chartView/ChartView'
import MarketCapSidebar from '../../MarketCap Sidebar/Index'
import { PortfolioCardView } from '../../PortfolioCard/PortfolioCardView'
import { CurrencyExchangeCard } from '../../CurrencyExchangeCard/Index'

export const Dashboard = ({children}) => {
  return (
  <div id='dashboard' className='p-2 w-full' >

<div className='grid grid-cols-4 bg-blue-50 m-4 p-4'>
<div className="flex col-span-4 px-2 ">
  <DashBoardNavBar/>
  </div>
<div className='p-2  max-w-full col-span-3  '>

<div className="bg-white mt-2 rounded-md shadow-sm p-4 min-h-[40vh]">
<ChartView className='p-4 h-1/3 '/>
</div>
</div>
<div className='mt-4 row-span-2 grid-auto-rows-1/2  bg-white border-box rounded-md shadow-sm py-4'>
  <MarketCapSidebar/>
</div>
<div className='col-span-3 p-2 '>
  <div className='grid grid-cols-2 gap-x-4'>
    <div className=''>
    <PortfolioCardView className={''}/>
    </div>
    <div>
  <CurrencyExchangeCard/>
</div>
  </div>
</div>

</div>

    {children}
  </div>
  )
}
