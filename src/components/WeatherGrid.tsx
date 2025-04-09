import WeatherCard from "./WeatherCard";

const WeatherGrid = () => {
    return (
        <div className="weather-grid">
            <WeatherCard city="city 2" temperature="10°C"/>
            <WeatherCard city="city 3" temperature="11°C"/>
            <WeatherCard city="city 2" temperature="10°C"/>
            <WeatherCard city="city 3" temperature="11°C"/>
            <WeatherCard city="city 2" temperature="10°C"/>
            <WeatherCard city="city 3" temperature="11°C"/>
            <WeatherCard city="city 2" temperature="10°C"/>
            <WeatherCard city="city 3" temperature="11°C"/>
            <WeatherCard city="city 2" temperature="10°C"/>
            <WeatherCard city="city 3" temperature="11°C"/>
            <WeatherCard city="city 2" temperature="10°C"/>
            <WeatherCard city="city 3" temperature="11°C"/>
        </div>
    );
};

export default WeatherGrid;