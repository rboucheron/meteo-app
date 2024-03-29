import React from "react";
import { City } from "../type/city";
import {MapPin} from "lucide-react"; 

interface LocationProps {
  city: City | null;
}

const Location: React.FC<LocationProps> = ({ city }) => {
  console.log(city);
  return (
    <>
      {city ? (
        <div className="text-sm  text-slate-50 flex items-center  p-2 ">
            <MapPin />  {city.country} {city.name}
        </div>
      ) : (
        <p>No city data available</p>
      )}
    </>
  );
};

export default Location;
