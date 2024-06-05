import React, { useReducer, useState } from 'react';
import { costReducer } from '../reducers/costReducer';
import { GlobalContext, GlobalDispatchContext } from './GlobalContext';

export function GlobalProvider({ children }) {
  const baseState = {
    selectedMonth: 1,
    allCosts: [],
    configPerMonth: []
  };
  const [allCosts, costDispatch] = useReducer(costReducer, baseState.allCosts);
  const [selectedMonth, setSelectedMonth] = useState(baseState.selectedMonth);

  return (
    <GlobalContext.Provider value={{
      allCosts: allCosts,
      selectedMonth: selectedMonth,
      setSelectedMonth: setSelectedMonth,
      configPerMonth: baseState.configPerMonth
    }}>
      <GlobalDispatchContext.Provider value={{
        costDispatch: costDispatch
      }}>
        {children}
      </GlobalDispatchContext.Provider>

    </GlobalContext.Provider>
  );
}