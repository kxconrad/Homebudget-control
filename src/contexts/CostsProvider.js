import React, { useReducer } from 'react';
import { costReducer } from '../reducers/costReducer';
import { CostsContext, CostsDispatchContext } from './CostsContext';

export function CostsProvider({ children }) {
  const baseState = {
    selectedMonth: 1,
    allCosts: [],
    configPerMonth: []
  };
  const [allCosts, dispatch] = useReducer(costReducer, baseState.allCosts);

  return (
    <CostsContext.Provider value={{
      allCosts: allCosts,
      selectedMonth: baseState.selectedMonth,
      configPerMonth: baseState.configPerMonth
    }}>
      <CostsDispatchContext.Provider value={{ newCostDispatch: dispatch }}>
        {children}
      </CostsDispatchContext.Provider>
    </CostsContext.Provider>
  );
}