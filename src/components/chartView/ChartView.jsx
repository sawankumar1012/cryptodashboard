import React, { useState } from "react";
import { ChartComponent as Chart } from "../chart/Chart";
import {
  useGetCoinHistoryDataQuery,
  useGetCoinsIdDataQuery,
} from "../../service/services";
import { coinsId, unixToDate } from "../../utils/helper";
import Moment from "react-moment";
import moment from "moment";
import { useSelector } from "react-redux";
import SelectComponent from "../Select";
import useForceUpdate from "use-force-update";
import { chartConfigurableOptions } from "../../utils/helper";
import {DropDownIcon} from '../icons/DropDownIcon'
import Button from '../Button'
import { NavBar } from "../NavBar";
export const ChartView = ({className}) => {
  const forceUpdate = useForceUpdate();
  const [days, setDays] = useState('7');
  const [coinsIdArray, setCoinId] = useState([coinsId[0]]);
  const [loading, setLoading] = useState(false);

  const [err, setErr] = useState(0);
  const vs_currency = useSelector((state) => state.coinData.vs_currency);
  const options = {
    coinId: coinsIdArray,
    vs_currency: vs_currency.value,
    days: days,
    interval: "daily",
  };

  const { isFetching, isLoading, isSucess, isError, data } =
    useGetCoinHistoryDataQuery(options);
  // console.log('chartView',data)
  // console.log('Error',isError)

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div>
        Error Occured API LIMIT EXCEDDED INCREASE PLAN TO CONTINUE
        <Button
          type="button"
          onClick={(e) => {
            forceUpdate();
            setErr(1);
          }}
        >
          click to retry
        </Button>
      </div>
    );
  }
  // console.log(data)

  const label =
    !isLoading &&
    !isError &&
    data[0]["prices"]?.map((el) =>
      moment.unix(el[0] / 1000).format("yyyy-MM-DD ")
    );
  const dataSet =
    !isLoading &&
    !isError &&
    data.map((el) => ({
      label: el.label,
      color:el.color,
      data: el["prices"]?.map((el) => el[1]),
    }));



  return (
    <div className={`w-full max-h-[inherit] ${className}`}>
      <div>
           
      <div className="flex justify-center align-items-center align-items-center gap-[100px]">
      <div className="flex gap-2">
      {
           Object.entries(chartConfigurableOptions).map(([key, value]) => {
            return <Button type='button' size='sm' color='blue' key={key} onClick={()=>{setDays(key);}} active={days===key}>{value.label}</Button>
        })
        }
      </div>

         <SelectComponent
         className="border-2 rounded-lg bg-slate-100 min-w-[300px]"
         size='sm'
          options={coinsId}
          isSearchable={true}
          value={coinsIdArray}
          isMulti={true}
          isMultiValueRemoveDisabled={coinsIdArray.length===1}
          variant='fill'
          color='gray'
          
          indicator={<img
            src="icons/img_arrowdown_black_900.svg"
            width={32}
            height={40}
            alt="arrow_down"
            className="h-[40px] w-[32px]"
          />  }
          onChange={(e) => {
            setCoinId(e);
          }}
        ></SelectComponent>
      </div>
        
      </div>
      {!isFetching && !isLoading && (
        <Chart
        className={`${className}`}
          dataLabels={label}
          dataSet={dataSet}
          days={days}
          currency={vs_currency.value}
        />
      )}
  
     
     
    </div>
  );
};
