import { useState } from "react";
import LocationSelector from "../components/LocationSelector";
import MainWeatherCard from "../components/MainWeatherCard";
import WeatherGrid from "../components/WeatherGrid";
import FilterSelector from "../components/FilterSelector";

const HomeScreen = () => {
    const [selectedCities, setSelectedCities] = useState<any[]>([]);
    const [mainCity, setMainCity] = useState<any | null>(null); 
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: boolean}>({
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

    return (
        <div className="home-container">

            <LocationSelector 
                selectedCities={selectedCities} 
                setSelectedCities={setSelectedCities} 
            />

            <div className="main-city">
                <MainWeatherCard 
                    mainCity={mainCity}
                />
            </div>

            <div className="other-cities">
                <WeatherGrid 
                selectedCities={selectedCities}
                setMainCity={setMainCity}
                mainCity={mainCity}
                selectedFilters={selectedFilters}
                 />
            </div>

            <div className="filter-panel-container">
                <FilterSelector 
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                />
            </div>

        </div>
    );
};
export default HomeScreen;