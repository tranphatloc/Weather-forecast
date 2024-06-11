/**
 * @typedef {Object} WeatherElementContent
 * @property {string} value
 * @property {keyof typeof units} [unit]
 * @property {string | JSX.Element} [head]
 */

/**
 * @typedef {Object} WeatherElement
 * @property {number} id
 * @property {string} title
 * @property {string} [desc]
 * @property {WeatherElementContent[]} content
 */

/**
 * @params {any}
 * @returns {WeatherElement[]}
 */
export function convertAPI(apiData,astronomyData) {
  /**
   * @type {WeatherElement[]}
   */
  const result = [];

  // Temp
  result.push({
    id: 1,
    title: "Wind",
    desc: "Direction: " + apiData.current.wind_dir,
    content: [
      {
        value: apiData.current.wind_mph, //10.5
        unit: "mph",
      },
      {
        value: apiData.current.wind_kph, //16.5
        unit: "kph",
      },
    ],
  },
  {
    id: 2,
    title: "Humidty",
    content: [
      {
        value: apiData.current.humidity, 
        unit: "pe",
      },
    ],
  },
  {
    id: 3,
    title: "Pressure",
    content: [
      {
        value: apiData.current.pressure_mb, 
        unit: "mb",
      },
      {
        value: apiData.current.pressure_in, 
        unit: "in",
      }
    ],
  },
  {
    id: 4,
    title: "Cloud",
    content: [
      {
        value: apiData.current.cloud, 
        unit: "pe",
      },
    ],
  },
  {
    id: 5,
    title: "Feelslike",
    content: [
      {
        value: apiData.current.feelslike_c, 
        unit: "c",
      },
      {
        value: apiData.current.feelslike_f, 
        unit: "f",
      }
    ],
  },
  {
    id: 6,
    title: "Visibility",
    content: [
      {
        value: apiData.current.vis_km, 
        unit: "km",
      },
      {
        value: apiData.current.vis_miles, 
        unit: "miles",
      }
    ],
  },
  {
    id: 7,
    title: "UV Index",
    content: [
      {
        value: apiData.current.uv, 
      },
    ],
  },
  {
    id: 8,
    title: "Gust",
    content: [
      {
        value: apiData.current.gust_mph,
        unit: "mph"
      },
      {
        value: apiData.current.gust_kph, 
        unit: "kph"
      },
    ],
  },
  {
    id: 9,
    title: "Sun",
    content: [
      {
        value: astronomyData.astronomy.astro.sunrise,

        head: "Sun rise"
      },
      {
        value: astronomyData.astronomy.astro.sunset, 

        head: "Sun set"
      },
    ],
  },
  {
    id: 10,
    title: "Moon",
    desc: astronomyData.astronomy.astro.moon_phase,
    content: [
      {
        value: astronomyData.astronomy.astro.moonrise,
  
        head: "Moon rise"
      },
      {
        value: astronomyData.astronomy.astro.moonset, 

        head: "Moon set"
      },
    ],
  },
  );

  return result;
}

export const units = {
  a: "AM",
  p: "PM",
  c: <>&#8451;</>,
  pe: "%",
  sp: "km/h",
  mb: "mb",
  mph: "MPH",
  kph: "KPH",
  in: "in",
  f: <>&#8457;</>,
  km: "km",
  miles: "miles"
};
