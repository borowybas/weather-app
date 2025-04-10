import { useState } from "react";
import LocationSelector from "../components/LocationSelector";
import MainWeatherCard from "../components/MainWeatherCard";
import WeatherGrid from "../components/WeatherGrid";

const HomeScreen = () => {
    const [selectedCities, setSelectedCities] = useState<any[]>([]);
    const [mainCity, setMainCity] = useState<any | null>(null); 

    return (
        <div className="home-container">
            <LocationSelector 
                selectedCities={selectedCities} 
                setSelectedCities={setSelectedCities} 
            />
            <div className="main-city">
                <MainWeatherCard 
                mainCity={mainCity}/>
            </div>
            <div className="other-cities">
                <WeatherGrid 
                selectedCities={selectedCities}
                setMainCity={setMainCity}
                mainCity={mainCity} />
            </div>
        </div>
    );
};
export default HomeScreen;