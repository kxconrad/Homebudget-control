import React from "react";
import { baseData } from "../../utils/data/baseData";


export default function DefiniedSelector({ dataType, extraClassess }) {

  const getData = (dataType) => {
    switch (dataType) {
      case "months":
        return baseData.months;
      case "categories":
        return baseData.categories;
      default:
        return baseData.months;
    }
  };

  const dataArray = getData(dataType);

  return <div className={extraClassess}>
    <select className="select">
      {dataArray.map((item, index) => <option key={index} value={item.number}>{item.name}</option>)}
    </select>
  </div>;
}