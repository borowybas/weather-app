import { useState } from "react";
import LocationSelector from "../components/LocationSelector";
import MainWeatherCard from "../components/MainWeatherCard";
import WeatherGrid from "../components/WeatherGrid";

const HomeScreen = () => {
    const [selectedCities, setSelectedCities] = useState<any[]>([]);

    return (
        <div className="home-container">
            <LocationSelector 
                selectedCities={selectedCities} 
                setSelectedCities={setSelectedCities} 
            />
            <div className="main-city">
                <MainWeatherCard />
            </div>
            <div className="other-cities">
                <WeatherGrid selectedCities={selectedCities} />
            </div>
        </div>
    );
};
export default HomeScreen;