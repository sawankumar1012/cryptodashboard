import { configureStore } from "@reduxjs/toolkit";
import {coinDataSlice} from "./coinDataSlice";    
import { coinDataApi } from "../service/services";
const store = configureStore({
  reducer: {
    [coinDataSlice.reducerPath]: coinDataSlice.reducer,
    [coinDataApi.reducerPath]:coinDataApi.reducer,
  },
  middleware:mid=>(
    mid().concat(coinDataApi.middleware)
)
});

export default store;