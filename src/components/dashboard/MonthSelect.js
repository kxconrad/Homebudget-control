import React, { useContext } from 'react';
import { baseData } from '../../utils/data/baseData';
import { monthHandler } from '../../utils/monthHandler';
import { CostsContext } from '../../contexts/CostsContext';

export default function MonthSelect() {
  const { months } = baseData;
  const { selectedMonth } = useContext(CostsContext);

  return (<div>
    <select className="select" onChange={monthHandler}>
      {months.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
    </select>
    <div>selected month: {selectedMonth}</div>
  </div>);
}