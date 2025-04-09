
import MainWeatherCard from "../components/MainWeatherCard";
import WeatherGrid from "../components/WeatherGrid";

const HomeScreen = () => {
    return (
        <div className="home-container">
            
           
            <div className="main-city">
                <MainWeatherCard />
            </div>
            <div className="other-cities">
                <WeatherGrid />
            </div>
            
        </div>

    );
};

export default HomeScreen;