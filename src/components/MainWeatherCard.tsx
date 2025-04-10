import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../api/weather";

const MainWeatherCard = () => {
    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        // fetchWeatherByCity('New York').then(setWeatherData);
        // fetchWeatherByCity('New Y').then(setWeatherData);

    }, []);

    if (!weatherData) return <p>Ładowanie danych pogodowych...</p>;

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
            <h2>{weatherData.name}</h2>
            <p>{weatherData.main.temp}</p>
            <p>Wiatr: {weatherData.wind.speed} m/s</p>
            <p>Opis: {weatherData.weather[0].description}</p>
            {/* inne dane wg ustawień */}
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