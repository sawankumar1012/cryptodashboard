export const currencyFormatter = (value,currency)=>{
  
  const currencyFormatter = new Intl.NumberFormat(currency=='inr'||currency=='INR'?'en-IN':'en-US', {
    style: "currency",
    currency: currency,
  });
 
  return currencyFormatter.format(value)
}
export const coinsId=[{
    id:'bitcoin',
    label:'Bitcoin',
    value:'btc',
    color:'#f7931a',
},
{
    id:'ethereum',
    label:'Ethereum',
    value:'eth',
    color:'#6e5494',
},
{
    id:'tether',
    label:'Tether',
    value:'usdt',
    color:'#3498db',
},

]

export const globalCurrencyOptions=[
    {value:"usd",label:"USD"},
    {value:"eur",label:"EUR"},
    {value:"inr",label:"INR"},
]
export const chartConfigurableOptions = {
    7: {label:'7D',
      units: "days",
      dateFormat: (dateValue) => {
        const date = new Date(dateValue);
        const month =date.toLocaleString("default", { month: "long" });
        const numbericDate = date.getDate();

        return `${month} ${numbericDate}`
      },
    },
    30: {
      label:'1M',
      units: 'days',
      dateFormat: (dateValue) => {
        const date = new Date(dateValue);
        const month =date.toLocaleString("default", { month: "long" });
        const numbericDate = date.getDate();
        return `${month} ${numbericDate}`
      },
    },
    365: {
      label:'1Y',
      units: "months",
      dateFormat: (dateValue) => {
        const date = new Date(dateValue);
         return date.toLocaleString("default", { month: "long" });
       
      },
    },
  };

  export const portfolioData = [{
    coinId:'bitcoin',
    label:'Bitcoin',
    investmentValue:{
      'usd':34,
      'inr':34*85,
      'eur':34*0.93
    },
    color:'#f7931a',
  },
  {
    coinId:'ethereum',
    label:'Ethereum',
    investmentValue:{
      'usd':54,
      'inr':54*85,
      'eur':54*0.93
    }, color:'#6e5494',
  },
  {
    coinId:'tether',
    label:'Tether',
    investmentValue:{
      'usd':24,
      'inr':24*85,
      'eur':24*0.93
    },
    color:'#3498db',
  },
]

