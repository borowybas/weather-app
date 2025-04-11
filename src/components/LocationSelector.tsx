import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchWeatherByCity, searchCity } from "../api/weather";
import '../styles/LocationSelector.scss';

const LocationSelector = ({ selectedCities, setSelectedCities }: {
    selectedCities: any[],
    setSelectedCities: React.Dispatch<React.SetStateAction<any[]>>
}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    const handleSearch = async () => {
        // Dont call api when serch query is empty or too short
        if (query.length < 3) {
            setResults([]);
            return;
        }
        // Call api to get city data
        const data = await searchCity(query);
        // Set results to state
        setResults(data);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCheckboxChange = async (cityName: string) => {
        // const city = selectedCities.find((r) => r.name === cityName); // Find city in results
        // if (!city) return;

        if (selectedCities.find((c) => c.location.name === cityName)) {
            // Delete city from main grid
            setSelectedCities((prev) => {
                const updatedCities = prev.filter((c) => c.location.name !== cityName);
                localStorage.setItem("selectedCities", JSON.stringify(updatedCities));
                return updatedCities;
            });
        } else {
            // Get weather data from api and add city to main grid
            const weatherData = await fetchWeatherByCity(cityName);
            setSelectedCities((prev) => {
                const updatedCities = [...prev, weatherData];
                localStorage.setItem("selectedCities", JSON.stringify(updatedCities));
                return updatedCities;
            });
        }
    };

    useEffect(() => {
        // Remove search results whhen clickked utside
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target as Node)) {
                setResults([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="location-selector">
            <h3>Add Cities</h3>
            <div className="location-selector-input-container" ref={searchContainerRef}>
                <FaSearch id="location-selector-icon" />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for a city..."
                    className="location-selector-input"
                />
                <div className="location-selector-results">
                    {results.map((result, id) => (
                        <div
                            key={id}
                            onClick={() => handleCheckboxChange(result.name)}
                            className="location-selector-result-item"
                        >
                            {result.name}, &nbsp;
                            {result.country}
                            {result.region && result.region !== 'null' ? ', ' + result.region : ''}
                        </div>
                    ))}
                </div>
            </div>
            <ul className="location-selector-list">
                {selectedCities.map((city, idx) => (
                    <li key={idx} className="location-selector-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedCities.some((c) => c.location.name === city.location.name)}
                                onChange={() => handleCheckboxChange(city.location.name)}
                            />
                            {city.location.name}, &nbsp;
                            {city.location.country}
                            {city.location.region && city.location.region !== 'null' ? ', ' + city.location.region : ''}
                        </label>
                    </li>
                ))}

                {!selectedCities.some((c) => c.location.name === "Katowice") && (
                    <li className="location-selector-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={false}
                                onChange={() => handleCheckboxChange("Katowice")}
                            />
                            Katowice, Poland
                        </label>
                    </li>
                )}

                {!selectedCities.some((c) => c.location.name === "Paris") && (
                    <li className="location-selector-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={false}
                                onChange={() => handleCheckboxChange("Paris")}
                            />
                            Paris, France, Ile-de-France
                        </label>
                    </li>
                )}


                {!selectedCities.some((c) => c.location.name === "Madrid") && (
                    <li className="location-selector-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={false}
                                onChange={() => handleCheckboxChange("Madrid")}
                            />
                            Madrid, Spain, Madrid
                        </label>
                    </li>
                )}

            </ul>
        </div>
    );
};

export default LocationSelector;