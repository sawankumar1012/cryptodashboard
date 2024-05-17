import React from 'react'
import { PieChart } from '../chart/PieChart'
import { useSelector } from 'react-redux';
import { currencyFormatter, portfolioData } from '../../utils/helper';
import { Text } from '../Text';
import { Card } from '../Card';
export const PortfolioCardView = () => {
  const currency = useSelector((state) => state.coinData.vs_currency);
const labels = portfolioData.map(el=>el.label)

const dataSets = portfolioData.map(el=>el.investmentValue[currency.value])

const totalInvestment = currencyFormatter(portfolioData.reduce((acc,el)=>acc+el.investmentValue[currency.value],0),currency.value)

const colors = portfolioData.map(el=>el.color)
  return (
    <Card size='xl'>
<div className='flex mb-2 items-center justify-between'>
  <Text size='md' className='font-bold text-gray-700'>
    Portfolio
  </Text>
  <Text size='md' className=' text-gray-700 '>
    Total Value <span className='text-gray-500'>({totalInvestment})</span>
  </Text>
  
</div>
<div className='w-full flex items-center justify-center'>
<div className='h-[25vh] w-[40vh] flex items-center justify-center '>
        { currency.value&&<PieChart dataLabels={labels} dataSets={dataSets} colors={colors} currency={currency}/>}
    </div>
</div>

  
    </Card>
  )
    
}
