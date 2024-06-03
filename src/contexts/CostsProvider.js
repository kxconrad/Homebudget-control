import React, { useReducer } from "react";
import { costReducer } from "../reducers/costReducer";
import { CostsContext, CostsDispatchContext } from "./CostsContext";

export function CostsProvider({ children }) {
  const baseState = {
    selectedMonth: 1,
    monthData: [],
    monthCosts: [],
    moneysPerMonth: []
  };
  const [monthCosts, dispatch] = useReducer(costReducer, baseState.monthCosts);

  return (
    <CostsContext.Provider value={monthCosts}>
      <CostsDispatchContext.Provider value={dispatch}>
        {children}
      </CostsDispatchContext.Provider>
    </CostsContext.Provider>
  );
}