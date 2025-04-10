type WeatherCardProps = {
    city: string;
    weatherData: any;
    selectedFilters: {[key: string]: boolean};
    isMainCity?: boolean;
    onSetMainCity?: () => void;
};

const WeatherCard = ({city, weatherData, selectedFilters, isMainCity, onSetMainCity}: WeatherCardProps) => {
    return (
        <div className={`weather-card ${isMainCity ? "main" : ""}`}>
            <h2 className="weather-card-title">{city}</h2>
            <div className="weather-card-content">
                {selectedFilters.temp_c && <p>Temperature: {weatherData.current.temp_c}°C</p>}
                {selectedFilters.temp_f && <p>Temperature: {weatherData.current.temp_f}°F</p>}
                {selectedFilters.condition && <p>Condition: {weatherData.current.condition.text}</p>}
                {selectedFilters.wind_kph && <p>Wind: {weatherData.current.wind_kph} km/h</p>}
                {selectedFilters.wind_mph && <p>Wind: {weatherData.current.wind_mph} mph</p>}
                {selectedFilters.humidity && <p>Humidity: {weatherData.current.humidity}%</p>}
                {selectedFilters.precip_mm && <p>Precipitation: {weatherData.current.precip_mm} mm</p>}
                {selectedFilters.cloud && <p>Cloudiness: {weatherData.current.cloud}%</p>}
                {selectedFilters.pressure_mb && <p>Pressure: {weatherData.current.pressure_mb} mb</p>}
                {selectedFilters.vis_km && <p>Visibility: {weatherData.current.vis_km} km</p>}
                {selectedFilters.uv && <p>UV Index: {weatherData.current.uv}</p>}
                {selectedFilters.feelslike_c && <p>Feels Like: {weatherData.current.feelslike_c}°C</p>}
                {selectedFilters.feelslike_f && <p>Feels Like: {weatherData.current.feelslike_f}°F</p>}
                <img src={weatherData.current.condition.icon.startsWith("//") ? `https:${weatherData.current.condition.icon}` : weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
            </div>
            {!isMainCity && (
                <button className="weather-card-button" onClick={onSetMainCity}>
                    Set as Main City
                </button>
            )}
            {/* <button className="weather-card-button">Refresh</button> */}
        </div>
    );
};

export default WeatherCard;
