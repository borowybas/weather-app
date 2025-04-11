import { useEffect, useState } from "react";
import LocationSelector from "../components/LocationSelector";
import MainWeatherCard from "../components/MainWeatherCard";
import WeatherGrid from "../components/WeatherGrid";
import FilterSelector from "../components/FilterSelector";
import '../styles/HomeScreen.scss';
import Navbar from "../components/Navbar";
import { fetchWeatherByCity } from "../api/weather";

const HomeScreen = () => {
    const [selectedCities, setSelectedCities] = useState<any[]>([]);
    const [mainCity, setMainCity] = useState<any | null>(null);
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: boolean }>({
        temp_c: true,
        temp_f: true,
        condition: true,
        wind_kph: false,
        wind_mph: false,
        humidity: false,
        precip_mm: false,
        cloud: false,
        pressure_mb: false,
        vis_km: false,
        uv: false,
        feelslike_c: false,
        feelslike_f: false,
    });

    // Function to fetch weather data for a default city and update local storage
    useEffect(() => {
        const initializeDefaultCity = async () => {

            const savedCities = localStorage.getItem("selectedCities");
            const savedFilters = localStorage.getItem("selectedFilters");
            const savedMainCity = localStorage.getItem("mainCity");

                
            if (savedCities) {
                setSelectedCities(JSON.parse(savedCities));
            } else {
                const defaultData = await fetchWeatherByCity("Katowice");
                setSelectedCities([defaultData]);
                setMainCity(defaultData);
                localStorage.setItem("selectedCities", JSON.stringify([defaultData]));
                localStorage.setItem("mainCity", JSON.stringify(defaultData));
            }
            if (savedFilters) {
                setSelectedFilters(JSON.parse(savedFilters));
            }
            if (savedMainCity) {
                setMainCity(JSON.parse(savedMainCity));
            }

        };

        initializeDefaultCity();

    }, []);


    return (
        <div className="home-container">
            <Navbar />

            <div className="main-content">
                <div className="main-city">
                    <MainWeatherCard
                        mainCity={mainCity}
                    />
                </div>

                <div className="other-cities">
                    <WeatherGrid
                        selectedCities={selectedCities}
                        setMainCity={(city) => {
                            setMainCity(city);
                            localStorage.setItem("mainCity", JSON.stringify(city));
                        }}
                        mainCity={mainCity}
                        selectedFilters={selectedFilters}
                    />
                </div>
            </div>

            <div className="side-panel">
                <LocationSelector
                    selectedCities={selectedCities}
                    setSelectedCities={setSelectedCities}
                />

                <FilterSelector
                    selectedFilters={selectedFilters}
                    setSelectedFilters={(filters) => {
                        setSelectedFilters(filters);
                        localStorage.setItem("selectedFilters", JSON.stringify(filters));
                    }}
                />

            </div>

        </div>
    );
};
export default HomeScreen;