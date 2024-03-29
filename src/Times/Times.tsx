import React from "react";
import { Weather } from "../type/weather";

interface TimesProps {
  Weather: Weather | null;
}

const Times: React.FC<TimesProps> = ({ Weather }) => {
  console.log(Weather);
  const WeatherIcon: string =
    "http://openweathermap.org/img/wn/" + Weather?.icon + "@2x.png";
  return (
    <>
      {Weather ? (
        <div className="flex items-center justify-center">
          <img src={WeatherIcon} className="w-20 h-20" alt={Weather.description} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Times;
