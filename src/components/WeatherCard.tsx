
type WeatherCardProps = {
    city: string;
    temperature: string;
};

const WeatherCard = ({city, temperature}: WeatherCardProps) => {
    return (
        <div className="weather-card">
            <h2 className="weather-card-title">{city}</h2>
            <div className="weather-card-content">
                {/* <p>Location: {city}</p> */}
                <p>Temperature: {temperature}</p>
                <p>Condition: Sunny</p>
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