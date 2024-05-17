import React from 'react'
import SelectComponent from '../Select'
import { globalCurrencyOptions } from '../../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { setGlobalCurrency } from '../../store/coinDataSlice'

export const CurrencySelector = ({className}) => {
  const globalCurrency=useSelector(state=>state.coinData.vs_currency)
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        dispatch(setGlobalCurrency(e))
    }
  return (
<>
<SelectComponent className={className} options={globalCurrencyOptions} value={globalCurrency} onChange={e=>handleChange(e)}>
    
    </SelectComponent>
</>
  )
}
