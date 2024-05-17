import React from 'react'
import { Card } from '../Card'
import { Text } from '../Text'
import { currencyFormatter } from '../../utils/helper'
export const MarketCapSidebarCard = ({data,vs_currency}) => {
  
      const formattedCurrency= currencyFormatter(data?.market_cap,vs_currency)
      
  return (
    <Card className="flex justify-between items-center shadow-none border-b-[1px]"size='sm'>
    <div className='py-3 pl-6'>
<Text as='h4' size='lg' className='font-semibold text-black'>
    {data.name}
</Text>
<Text size='xs' className='text-gray-400'>
Mkt.cap {formattedCurrency}
</Text>
    </div>
    <div className='flex justify-center items-center py-3 pr-6 gap-1'>
<img  className='h-3'src={`./icons/${data.ath_change_percentage>0?'green-triangle.png':'red-triangle.png'}` }></img>
<Text size='s' className={`${data.ath_change_percentage>0?'text-green-500':'text-red-500'}`}>
    {data.ath_change_percentage.toFixed(2)} %

</Text>
    </div>
    </Card>
  )
}
