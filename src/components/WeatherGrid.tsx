import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherGrid = ({
    selectedCities,
    setMainCity,
    mainCity,
    selectedFilters
}: {
    selectedCities: any[],
    setMainCity: (city: any) => void,
    mainCity: any,
    selectedFilters: { [key: string]: boolean }
}) => {

    // Handle setting the main city and updating local storage
    const handleSetMainCity = (city: any) => {
        setMainCity(city);
        localStorage.setItem("mainCity", JSON.stringify(city));
    };

    return (
        <div className="weather-grid">
            {selectedCities.map((city, index) => (
                <WeatherCard
                    key={index}
                    city={city.location.name}
                    weatherData={city}
                    selectedFilters={selectedFilters}
                    isMainCity={mainCity?.location.name === city.location.name}
                    onSetMainCity={() => setMainCity(city)}
                />
            ))}
        </div>
    );
};

export default WeatherGrid;