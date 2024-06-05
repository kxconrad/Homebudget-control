import React from 'react';
import MonthSelect from './MonthSelect';
import Counters from './Counters';

export default function Dashboard() {

  return (
    <div className="w-full px-5">
      <MonthSelect />
      <Counters />
    </div>);
}