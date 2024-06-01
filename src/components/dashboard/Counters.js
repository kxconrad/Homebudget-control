import React from "react";

export default function Counters() {
  return <div className="w-full mt-5 flex justify-around">
    <div className="flex flex-col items-center">
      <h1>Liczba kosztów:</h1>
      <div className="h-[150px] w-[150px] bg-slate-300 rounded-full flex justify-center items-center">
        <span className="text-3xl">0</span>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h1>Wydane:</h1>
      <div className="h-[150px] w-[150px] bg-slate-300 rounded-full flex justify-center items-center">
        <span className="text-3xl">0</span>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h1>Pozostało:</h1>
      <div className="h-[150px] w-[150px] bg-slate-300 rounded-full flex justify-center items-center">
        <span className="text-3xl">0</span>
      </div>
    </div>

  </div>;
}