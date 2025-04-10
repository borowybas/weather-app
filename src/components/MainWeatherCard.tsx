import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../api/weather";

const MainWeatherCard = ({mainCity}: {mainCity: any}) => {
    if (!mainCity) return <p>Nie ustawiono głównego miasta...</p>;
    const [weatherData, setWeatherData] = useState<any>(null);

    // useEffect(() => {
    //     // fetchWeatherByCity('New York').then(setWeatherData);
    //     // fetchWeatherByCity('New Y').then(setWeatherData);

    // }, []);

    // if (!weatherData) return <p>Ładowanie danych pogodowych...</p>;

    return (
        // <div className="weather-card main">
        //     <h2 className="weather-card-title">Weather Forecast</h2>
        //     <div className="weather-card-content">
        //         <p>Main city: New York</p>
        //         <p>Temperature: 25°C</p>
        //         <p>Condition: Sunny</p>
        //     </div>
        //     <button className="weather-card-button">Refresh</button>
        // </div>
        <div className="weather-card main">
            <h2>{mainCity.location.name}</h2>
            <p>{mainCity.current.temp_c}°C</p>
            <p>Wiatr: {mainCity.current.wind_kph} km/s</p>
            <p>Opis: {mainCity.current.condition.text}</p>
        </div>
    );
};

export default MainWeatherCard;

// interface MainWeatherCardProps {
//     weatherData: any; // Replace 'any' with the appropriate type for weatherData
// }

// const MainWeatherCard: React.FC<MainWeatherCardProps> = ({ weatherData }) => {
//     return (
//         <div>
//             {/* Main weather card content */}
//             <p>{JSON.stringify(weatherData)}</p> {/* Example usage */}
//         </div>
//     );
// };

// export default MainWeatherCard;