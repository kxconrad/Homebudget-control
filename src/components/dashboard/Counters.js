import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Counters() {
  const { allCosts, selectedMonth } = useContext(GlobalContext);

  const filteredCosts = allCosts.filter((cost) => cost.month === selectedMonth);

  const countersData = {
    length: filteredCosts.length ? filteredCosts.length : 0,
    moneySpent: filteredCosts.length ? filteredCosts.reduce((total, current) => total + current.value, 0) : 0,
    currency: 'zł'

  };

  console.log('filteredCosts: ', filteredCosts);

  return (<div className="w-full mt-5 flex justify-around flex-wrap">
    <div className="flex flex-col items-center">
      <h1>Liczba kosztów:</h1>
      <div className="h-[150px] w-[150px] bg-slate-300 rounded-full flex justify-center items-center">
        <span className="text-3xl">
          {
            countersData.length
          }
          
        </span>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h1>Wydane:</h1>
      <div className="h-[150px] w-[150px] bg-slate-300 rounded-full flex justify-center items-center">
        <span className="text-3xl">
          {
            countersData.moneySpent + countersData.currency
          }
          </span>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h1>Pozostało:</h1>
      <div className="h-[150px] w-[150px] bg-slate-300 rounded-full flex justify-center items-center">
        <span className="text-3xl">0</span>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h1>Budżet w danym miesiącu:</h1>
      <div className="h-[150px] w-[150px] bg-slate-300 rounded-full flex justify-center items-center">
        <span className="text-3xl">0</span>
      </div>
    </div>
  </div>);
}