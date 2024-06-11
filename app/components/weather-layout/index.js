import dayjs from "dayjs";
// import { SearchInput } from "./search/index";
import { Search, SunMedium, CloudSun, Cloud } from "lucide-react";
import SearchInput from "../search";
import ListWeatherElement from "../weather-elements";
import { data } from "autoprefixer";
import Image from "next/image";
import Elementui from "../weather-elements/elementui";
function CheckHour() {
  const h = dayjs().hour();
  return (
    <span className=" capitalize  text-xl">
      {h >= 6 && h < 18 ? "day" : "night"}
    </span>
  );
}
/**
 * 
 * @param {object} param0 
 * @param {object} param0.currentWeather
 * @param {object} param0.astronomyWeather
 * @returns 
 */
function WtLayout({currentWeather, astronomyWeather}) {
  const dayjs = require("dayjs");
  return (
    <div className="flex flex-row h-screen border-2">
      <div className="flex flex-col basis-5/12 bg-gray-100 items-center p-4">
        <SearchInput />
        <div>
          <Image src={currentWeather.current.condition.icon.replace("//","https://")} className="w-16 h-16" width={64} height={64} alt={currentWeather.current.condition.text}/> 
        </div>
        <p>{currentWeather.current.condition.text}</p>
        <p className="text-5xl font-bold py-2 px-3">{currentWeather.current.temp_c} &#8451;</p>
        
        <div className="border-b-4 w-1/2 py-2 px-3"></div>
        <span className="text-sm pt-5 px-3">
          {dayjs().format("DD-MMMM-YYYY")}
        </span>
        <span className="text-xl">{dayjs().format("dddd,hh:mm A")}</span>
        <CheckHour />
        <div className="text-3xl py-20">
          {currentWeather.location.name}, {currentWeather.location.country}
        </div>
      </div>
      <div className=" grid grid-cols-3 basis-7/12 bg-zinc-300">
        <ListWeatherElement apiCurrentData={currentWeather} apiAstronomyData={astronomyWeather} />
      </div>
    </div>
  );
}
export default WtLayout;
