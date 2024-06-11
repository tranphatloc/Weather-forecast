import Image from "next/image";
import WtLayout from "./components/weather-layout";
import { notFound } from "next/navigation";
import dayjs from "dayjs";

export default async function Home() {
  const date = dayjs().format("YYYY-MM-dd");
  const weatherParams = new URLSearchParams({
    key: "1e2daa9e1a9244899a5141524242801",
    q: "saigon",
    aqi: "yes",
  });
  const astronomyParams = new URLSearchParams({
    key: "1e2daa9e1a9244899a5141524242801",
    q: "saigon",
    dt: { date },
  });
  const astronomyWeather = await fetch(
    `https://api.weatherapi.com/v1/astronomy.json?${astronomyParams.toString()}`,
    {
      method: "GET",
    }
  );

  const currentWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?${weatherParams.toString()}`,
    {
      method: "GET",
    }
  );
  if (currentWeather.ok && astronomyWeather.ok) {
    const currentData = await currentWeather.json();
    const astronomyData = await astronomyWeather.json();
    return (
      <main>
        <WtLayout
          currentWeather={currentData}
          astronomyWeather={astronomyData}
        />
      </main>
    );
  }
  notFound();
}
