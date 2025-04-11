import React, { useEffect, useState } from "react";
import "../styles/MainWeatherCard.scss";

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


        // <div className="weather-card main">
        //     <h2>{mainCity.location.name}</h2>
        //     <p>{mainCity.current.temp_c}°C</p>
        //     <p>Wiatr: {mainCity.current.wind_kph} km/s</p>
        //     <p>Opis: {mainCity.current.condition.text}</p>
        // </div>

<div className="main-weather-card">
            <h2 className="main-weather-card-title">{mainCity.location.name}</h2>
            <div className="main-weather-card-grid">
                <div className="weather-card-item">
                    <img src={mainCity.current.condition.icon.startsWith("//") ? `https:${mainCity.current.condition.icon}` : mainCity.current.condition.icon} alt={mainCity.current.condition.text} />

                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Temperature (°C)</span><br />
                    <span className="main-weather-card-value">{mainCity.current.temp_c}°C</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Temperature (°F)</span><br />
                    <span className="main-weather-card-value">{mainCity.current.temp_f}°F</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Condition</span><br />
                    <span className="main-weather-card-value">{mainCity.current.condition.text}</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Wind (km/h)</span><br />
                    <span className="main-weather-card-value">{mainCity.current.wind_kph} km/h</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Humidity</span><br />
                    <span className="main-weather-card-value">{mainCity.current.humidity}%</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Cloudiness</span><br />
                    <span className="main-weather-card-value">{mainCity.current.cloud}%</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Pressure</span><br />
                    <span className="main-weather-card-value">{mainCity.current.pressure_mb} mb</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Visibility</span><br />
                    <span className="main-weather-card-value">{mainCity.current.vis_km} km</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">UV Index</span><br />
                    <span className="main-weather-card-value">{mainCity.current.uv}</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Feels like (°C)</span><br />
                    <span className="main-weather-card-value">{mainCity.current.feelslike_c}°C</span>
                </div>
                <div className="main-weather-card-item">
                    <span className="main-weather-card-label">Feels like (°F)</span><br />
                    <span className="main-weather-card-value">{mainCity.current.feelslike_f}°F</span>
                </div>
            </div>
        </div>
    );
};

export default MainWeatherCard;