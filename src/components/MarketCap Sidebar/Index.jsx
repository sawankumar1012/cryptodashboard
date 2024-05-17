import React ,{useMemo} from 'react'
import { Card } from '../Card'
import { useGetTopCoinsByMarketValueQuery } from '../../service/services'
import { useSelector } from 'react-redux'
import { MarketCapSidebarCard } from './MarketCapSidebarCard'
import { Text } from '../Text'
const MarketCapSidebar = () => {
  const vs_currency = useSelector((state) => state.coinData.vs_currency);

  const { isFetching, isLoading, isSucess, isError, data } =
  useGetTopCoinsByMarketValueQuery({vs_currency:vs_currency.value})
  let slicedData=[]
   slicedData= useMemo(()=>{
 
    return !isLoading&&!isFetching&&!isError&&data.slice(0,10)
  },[isLoading,isError,data,vs_currency.value])
  if(isFetching||isLoading){
    return <div>Loading...</div>
  }

  return (
   <div className=' flex flex-col mx-auto realtive'>
    <Text size='lg' className='px-5 w-[200px] text-black text-bold sticky top-0'>
    Cryptocurrency by market cap
    </Text>
 <div className='w-full max-h-[80vh] overflow-y-auto'>
 {!isLoading&&!isFetching&&!isError&&(slicedData.map(el=>(
 <MarketCapSidebarCard data={el} key={el.id} vs_currency={vs_currency.value}/>
  )))}
 </div>
 
  

  
 
   </div>
  )
}

export default MarketCapSidebar