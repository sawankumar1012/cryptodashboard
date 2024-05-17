import React from "react";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import { chartConfigurableOptions, currencyFormatter } from "../../utils/helper";
import {CrosshairPlugin,Interpolate} from 'chartjs-plugin-crosshair';

import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  scales,
  Interaction,
  
 
} from "chart.js";
import { Line,Chart,Bar } from "react-chartjs-2";
import { unixToDate } from "../../utils/helper";
import { milliseconds } from "date-fns";

export const ChartComponent = ({ dataLabels = [], dataSet = [], days ,currency='USD',className='' }) => {
  
  ChartJS.register({
    CategoryScale,
  
    LinearScale,
    LineElement,
    PointElement,
    ArcElement,
    TimeScale,
    Title,
    Tooltip,
    Legend,
    CrosshairPlugin,
  });
  Interaction.modes.interpolate = Interpolate
  const options = {
    responsive:true,
    maintainAspectRatio:false,
    interaction:{
      mode:'index',
    
    },
    responsive: true,
    plugins: {
    crosshair:{
      line:{
        color:'grey',
      },
     
    },
      legend: {
        position: "top",
      },
    
    },
    scales: {
      x: {
        grid:{
          display:false
        
        },
        type: "time",
        time: {
          unit: chartConfigurableOptions[days].units,
        },
      
        adapters: {
          date: {
            locale: enUS,
          },
        },
        ticks: {
          callback: (value) => {
            return chartConfigurableOptions[days].dateFormat(value);
          },
        },
      },
      y: {
        ticks: {
          callback: (value) => {
           
            return currencyFormatter(value,currency)
          },
        },
      },
    },
  };
  const data = {
    labels: dataLabels,
     datasets:dataSet.map(el=>({
      label: `${el.label}`,
       data: el.data,
      borderColor: `${el.color}`,
       backgroundColor: el.color,
     })),
    // [
    //   {
    //     label: `Price`,
    //     data: dataSet,
    //     borderColor: "rgb(255, 99, 132)",
    //     backgroundColor: "rgba(255, 99, 132, 0.5)",
    //   },
    // ],
  };
  return (
    <div className={`${className} relative h-[40vh] w-full`}>
      <Line id='line' type="line" data={data} options={options} />
    </div>
  );
};
