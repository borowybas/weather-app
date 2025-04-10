
type WeatherCardProps = {
    city: string;
    temperature: string;
    // description: string;
    condition: string;
    icon: string;
};

const WeatherCard = ({city, temperature, condition, icon}: WeatherCardProps) => {
    return (
        <div className="weather-card">
            <h2 className="weather-card-title">{city}</h2>
            <div className="weather-card-content">
                {/* <p>Location: {city}</p> */}
                <p>Temperature: {temperature}℃</p>
                <p>Condition: {condition}</p>
                <img src={icon.startsWith("//") ? `https:${icon}` : icon} alt={condition} />
            </div>
            {/* <button className="weather-card-button">Refresh</button> */}
        </div>
        // <div className="weather-card">
        //     <h3>{city}</h3>
        //     <p>{temperature}</p>
        // </div>
    );
};

export default WeatherCard;
