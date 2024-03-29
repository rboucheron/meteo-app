import {useState, useEffect} from "react";
import axios from "axios";
import { City } from "../type/city";
import Location from "../location/Location";
import { Weather } from "../type/weather";
import Times from "../Times/Times";
import DateComponent from "../date/date";
import { Temperature } from "../type/temperature";

const Meteo = () => {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<Array<Weather> | null>(null);
  const [temperature, setTemperature] = useState<Array<Temperature> | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Esbly&appid=78886a19c93163d930ae4268518360a0&units=metric"
      )
      .then(function (response) {
        setCity(response.data.city);
        const ListWeather: Array<Weather> = [];
        const ListTemperature: Array<Temperature> = [];

        response.data.list.forEach((element) => {
          ListWeather.push(element.weather[0]);
          ListTemperature.push(element.main); 
        });
        setWeather(ListWeather);
        setTemperature(ListTemperature); 
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(weather);
  console.log(temperature); 

  return (
    <>
      <div className="w-full flex space-x-36">
        {city && <Location city={city} />}
        <DateComponent />
      </div>

      {weather && <Times Weather={weather[0]} />}
    </>
  );
};

export default Meteo;
