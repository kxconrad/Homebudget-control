import React from 'react';
import { baseData } from '../../utils/data/baseData';

interface DefiniedSelectorProps {
  dataType: string;
  stateValue: string | number;
  stateOnChange: any;
}

export default function DefiniedSelector({ dataType, stateValue, stateOnChange = null }: DefiniedSelectorProps) {

  const getData = (dataType: string) => {
    switch (dataType) {
      case 'months':
        return baseData.months;
      case 'categories':
        return baseData.categories;
      default:
        return baseData.months;
    }
  };

  const dataArray = getData(dataType);

  return <div>
    <select className="select" value={stateValue}
            onChange={(e) => stateOnChange(e.target.value)}>
      {dataArray.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
    </select>
  </div>;
}