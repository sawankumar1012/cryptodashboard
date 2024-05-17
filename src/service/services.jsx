import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { coinsId } from '../utils/helper'
export const coinDataApi = createApi({
    reducerPath: 'coinDataApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.coingecko.com/api/v3/'}),
    endpoints: (build) => ({
        getCoinHistoryData: build.query({
            queryFn: async ({coinId,vs_currency,days,interval},) => {
                try{
                 
                    const data = await Promise.all(coinId.map(e=>{
                    return fetch(`https://api.coingecko.com/api/v3/coins/${e.id}/market_chart?x_cg_api_key=${process.env.COINGECKO_API_KEY}&vs_currency=${vs_currency}&days=${days}&interval=${interval}`)
                    .then(res=>res.json())
                    .then(data=>({
                        ...data,
                        color:e.color,
                        label:e.label
                    }))
                    }))
                  
                  
               
                    return {data:data}
                }catch(error){
                    console.log(error)
                    return {data:error,error:error.message}
                }
                
            
            },
        }),
        getCoinsIdData: build.query({
            query: () => `coins/list?include_platform=false&status=active&x_cg_api_key=${process.env.COINGECKO_API_KEY}`,
        }),
        getTopCoinsByMarketValue : build.query({
            
            query:({vs_currency})=>`coins/markets?x_cg_api_key=${process.env.COINGECKO_API_KEY}&vs_currency=${vs_currency}`,
        }),
        getConvertedCoinsData:build.query({
            queryFn:async({fromCoinId,toCoinId,fromValue})=>{
                try{
                    console.log('running')
                        const CoinData = await Promise.all([fetch(`https://api.coingecko.com/api/v3/coins/${fromCoinId}`)
                        .then(res=>res.json())
                        .then(data=>{
                            return data.market_data?.current_price?.usd
                        }),
                        fetch(`https://api.coingecko.com/api/v3/coins/${toCoinId}`)
                        .then(res=>res.json())
                        .then(data=>data.market_data?.current_price?.usd)
                    ])
                    console.log('fromCoinData>>',CoinData)
                    console.log('fromValue>>',fromValue)
                    const convertedValue = (Number(fromValue) * CoinData[0]) / CoinData[1]
                   console.log('convertedValue>>',convertedValue)
                    return {data:convertedValue}
                }catch(error){
                    console.log('error message>>',error.message)
                    return {data:error,error:error.message}
                }
            }
        })
        
})
})

export const {useGetCoinHistoryDataQuery,useGetCoinsIdDataQuery,useGetTopCoinsByMarketValueQuery,useGetConvertedCoinsDataQuery,useLazyGetConvertedCoinsDataQuery} = coinDataApi