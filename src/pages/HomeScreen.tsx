import { useEffect, useState } from "react";
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

    useEffect(() => {
        const savedCities = localStorage.getItem("selectedCities");
        const savedFilters = localStorage.getItem("selectedFilters");
        const savedMainCity = localStorage.getItem("mainCity");
    
        if (savedCities) {
            setSelectedCities(JSON.parse(savedCities));
        }
        if (savedFilters) {
            setSelectedFilters(JSON.parse(savedFilters));
        }
        if (savedMainCity) {
            setMainCity(JSON.parse(savedMainCity));
        }
    }, []);
    //Restore saved data from local storage
    // useEffect(() => {
    //     const savedCities = localStorage.getItem("selectedCities");
    //     const savedMainCity = localStorage.getItem("mainCity");
    //     const savedFilters = localStorage.getItem("selectedFilters");
    //     if (savedCities) {
    //         setSelectedCities(JSON.parse(savedCities));
    //     }
    //     if (savedMainCity) {
    //         setMainCity(JSON.parse(savedMainCity));
    //     }
    //     if (savedFilters) {
    //         setSelectedFilters(JSON.parse(savedFilters));
    //     }
    // });

    // useEffect(() => {
    //     localStorage.setItem("selectedCities", JSON.stringify(selectedCities));
    // }, [selectedCities]);

    // useEffect(() => {
    //     localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    // }, [selectedFilters]);

    // useEffect(() => {
    //     localStorage.setItem("mainCity", JSON.stringify(mainCity));
    // }, [mainCity]);

    return (
        <div className="home-container">

            
            <div className="main-content">
                <div className="main-city">
                    <MainWeatherCard
                        mainCity={mainCity}
                    />
                </div>

                <div className="other-cities">
                    <WeatherGrid
                        selectedCities={selectedCities}
                        // setMainCity={setMainCity}
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
                {/* <div className="filter-panel-container"> */}
                <FilterSelector
                    selectedFilters={selectedFilters}
                    // setSelectedFilters={setSelectedFilters}
                    setSelectedFilters={(filters) => {
                        setSelectedFilters(filters);
                        localStorage.setItem("selectedFilters", JSON.stringify(filters));
                    }}
                />
                {/* </div> */}
            </div>

        </div>
    );
};
export default HomeScreen;