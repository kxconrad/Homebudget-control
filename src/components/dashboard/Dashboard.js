import React from "react";
import DefiniedSelector from "./DefiniedSelector";
import Counters from "./Counters";

export default function Dashboard() {
  return <div className="w-full px-5">
    <DefiniedSelector dataType="months" />
    <Counters />
  </div>;
}