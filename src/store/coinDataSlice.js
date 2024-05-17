import { createSlice } from "@reduxjs/toolkit"; 
const initialState={
    vs_currency:{value:"inr",label:"INR"},
    activeCoin:[],
    allCoinsId:[],
}

const coinDataSlice=createSlice({
    name:'coinData',
    initialState,
    reducers:{
        setGlobalCurrency:(state,action)=>{
            state.vs_currency={...action.payload};
        },
        setActiveCoin:(state,action)=>{
            state.activeCoin=action.payload;
        },
        setAllCoinsId:(state,action)=>{
            state.allCoinsId=[...action.payload];
        }
    }
})


export const {setGlobalCurrency,setActiveCoin,setAllCoinsId}=coinDataSlice.actions;
export  {coinDataSlice};