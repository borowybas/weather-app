import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherGrid = ({ selectedCities, setMainCity, mainCity }: { selectedCities: any[], setMainCity: (city: any) => void, mainCity: any }) => {
    return (
        <div className="weather-grid">
            {selectedCities.map((city, index) => (
                <WeatherCard 
                    key={index} 
                    city={city.location.name} 
                    temperature={`${city.current.temp_c}°C`} 
                    condition={city.current.condition.text} 
                    icon={city.current.condition.icon} 
                    isMainCity={mainCity?.location.name === city.location.name}
                    onSetMainCity={() => setMainCity(city)} // Set main city when clicked
                />
            ))}
        </div>
    );
};

export default WeatherGrid;

//---------------------------------------------=======================================================----------------------

// import WeatherCard from "./WeatherCard";
// import {WeatherData} from "../components/LocationSelector";

// // interface WeatherData {
// //   location: {
// //     name: string;
// //   };
// //   current: {
// //     temp_c: number;
// //     condition: {
// //       text: string;
// //       icon: string;
// //     };
// //   };
// // }

// const WeatherGrid = ({ weatherDataList }: { weatherDataList: WeatherData[] }) => {
//   return (
//     <div className="weather-grid">
//       {weatherDataList.map((weather, index) => (
//         <WeatherCard
//           key={index}
//           city={weather.location.name}
//           temperature={`${weather.current.temp_c}°C`}
//           condition={weather.current.condition.text}
//           icon={weather.current.condition.icon}
//         />
//       ))}
//     </div>
//   );
// };

// export default WeatherGrid;
