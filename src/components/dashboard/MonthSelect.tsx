import React, { useContext } from 'react';
import { baseData } from '../../utils/data/baseData';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function MonthSelect() {
  const { months } = baseData;
  const { selectedMonth, setSelectedMonth } = useContext(GlobalContext);

  const handleChangeMonth = (e: React.ChangeEvent) => {
    setSelectedMonth(+(e.target as HTMLSelectElement).value);
  };

  return (<div>
    <select className="select" onChange={handleChangeMonth} value={selectedMonth}>
      {
        months.map((item, index) =>
          <option key={index} value={item.value}>
            {item.name}
          </option>
        )}
    </select>
    <div>selected month: {selectedMonth}</div>
  </div>);
}