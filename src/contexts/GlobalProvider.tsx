import React, { useReducer, useState } from 'react';
import { costReducer } from '../reducers/costReducer';
import { GlobalContext, GlobalDispatchContext } from './GlobalContext';

interface GlobalProviderProps {
  children: React.ReactNode;
}

export function GlobalProvider(props: GlobalProviderProps) {

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
        {props.children}
      </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
}