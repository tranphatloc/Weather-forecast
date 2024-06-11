import React from "react";
import Elementui from "./elementui";
import { convertAPI } from "@/utils/common-functions";


function ListWeatherElement({apiCurrentData, apiAstronomyData }) {
  const renderData = convertAPI(apiCurrentData, apiAstronomyData);
  return (
    <>
      {renderData.map((weatherElement, index) => (
        <Elementui
          elementData={weatherElement}
          key={`elementui.item.${index}`}
        />
      ))}
    </>
  );
}

export default ListWeatherElement;
