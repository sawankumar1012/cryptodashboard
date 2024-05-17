import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,Interaction} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {CrosshairPlugin,Interpolate} from 'chartjs-plugin-crosshair';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { currencyFormatter } from '../../utils/helper';

ChartJS.register(ArcElement, Tooltip, Legend);

Interaction.modes.interpolate = Interpolate

export const PieChart = ({dataLabels = [], dataSets = [], colors=[],currency='USD',className=''})=> {


    const option={
        responsive:true,
    maintainAspectRatio:false,
        plugins:{
        datalabels:{
          color:'white',
          formatter:function(value,context){
           return currencyFormatter(value,currency.value)
          }
        },
        tooltip:false,
           crosshair:false,
           legend:{
            position:'right',
            labels:{
                usePointStyle:true,
                pointStyle:'circle'
            }
           }
            }
        
    }
    const data = {
        labels: dataLabels,
        
        
        datasets: [
          {
            label: '# of Votes',
            data: dataSets,
            backgroundColor:colors,
            borderColor:colors,
            borderWidth: 1,
          },
        ],
      };
  return <Pie id='piechart' plugins={[ChartDataLabels]} data={data} options={option} />;
}
