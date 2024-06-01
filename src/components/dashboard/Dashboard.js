import React from "react";
import MonthSelector from "./MonthSelector";
import Counters from "./Counters";

export default function Dashboard() {
  return <div className="w-full px-5">
    <MonthSelector />
    <Counters />
  </div>;
}