import "../styles/WeatherCard.scss";

type WeatherCardProps = {
    city: string;
    weatherData: any;
    selectedFilters: { [key: string]: boolean };
    isMainCity?: boolean;
    onSetMainCity?: () => void;
};

const WeatherCard = ({ city, weatherData, selectedFilters, isMainCity, onSetMainCity }: WeatherCardProps) => {
    return (
        <div className={`weather-card ${isMainCity ? "main" : ""}`}>
            <h2 className="weather-card-title">{city}</h2>

            <div className="weather-card-grid">
                <div className="weather-card-item">
                    <img src={weatherData.current.condition.icon.startsWith("//") ? `https:${weatherData.current.condition.icon}` : weatherData.current.condition.icon} alt={weatherData.current.condition.text} />

                </div>

                {selectedFilters.temp_c && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Tepmerature (°C)</span><br />
                        <span className="weather-card-value">{weatherData.current.temp_c}°C</span>
                    </div>
                )}
                {selectedFilters.temp_f && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Tepmerature (°F)</span><br />
                        <span className="weather-card-value">{weatherData.current.temp_f}°F</span>
                    </div>
                )
                }
                {selectedFilters.condition && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Condition</span><br />
                        <span className="weather-card-value">{weatherData.current.condition.text}</span>
                    </div>
                )

                }
                {selectedFilters.wind_kph && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Wind (km/h)</span><br />
                        <span className="weather-card-value">{weatherData.current.wind_kph} km/h</span>
                    </div>
                )

                }
                {selectedFilters.wind_mph && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Wind (m/h)</span><br />
                        <span className="weather-card-value">{weatherData.current.wind_mph} m/h</span>
                    </div>
                )

                }
                {selectedFilters.humidity && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Humidity</span><br />
                        <span className="weather-card-value">{weatherData.current.humidity}%</span>
                    </div>
                )
                }
                {selectedFilters.precip_mm && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Precipitation</span><br />
                        <span className="weather-card-value">{weatherData.current.precip_mm} mm</span>
                    </div>
                )

                }
                {selectedFilters.cloud && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Cloudiness</span><br />
                        <   span className="weather-card-value">{weatherData.current.cloud}%</span>
                    </div>
                )
                }
                {selectedFilters.pressure_mb && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Pressure</span><br />
                        <span className="weather-card-value">{weatherData.current.pressure_mb} mb</span>
                    </div>
                )

                }
                {selectedFilters.vis_km && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Visibility</span><br />
                        <span className="weather-card-value">{weatherData.current.vis_km} km</span>
                    </div>
                )

                }
                {selectedFilters.uv && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">UV Index</span><br />
                        <span className="weather-card-value">{weatherData.current.uv}</span>
                    </div>
                )

                }
                {selectedFilters.feelslike_c && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Feels like (°C)</span><br />
                        <span className="weather-card-value">{weatherData.current.feelslike_c}°C</span>
                    </div>
                )

                }
                {selectedFilters.feelslike_f && (
                    <div className="weather-card-item">
                        <span className="weather-card-label">Feels like (°F)</span><br />
                        <span className="weather-card-value">{weatherData.current.feelslike_f}°F</span>
                    </div>
                )

                }
            </div>


            {!isMainCity && (
                <button className="weather-card-button" onClick={onSetMainCity}>
                    Set as Main City
                </button>
            )}

        </div>
    );
};

export default WeatherCard;
