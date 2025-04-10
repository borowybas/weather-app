
// import { useState } from "react";
// import LocationSelector from "../components/LocationSelector";
// import MainWeatherCard from "../components/MainWeatherCard";
// import WeatherGrid from "../components/WeatherGrid";

// const HomeScreen = () => {
//     const [weatherDataList, setWeatherDataList] = useState([]);
//     return (
//         <div className="home-container">
            
//            <LocationSelector />
//             <div className="main-city">
//                 <MainWeatherCard />
//             </div>
//             <div className="other-cities">
//                 <WeatherGrid />
//             </div>
            
//         </div>

//     );
// };

// export default HomeScreen;

// import { useState } from "react";
// import LocationSelector from "../components/LocationSelector";
// import MainWeatherCard from "../components/MainWeatherCard";
// import WeatherGrid from "../components/WeatherGrid";

// const HomeScreen = () => {
//     const [selectedCities, setSelectedCities] = useState<any[]>([]); // Manage selected cities here

//     return (
//         <div className="home-container">
//             <LocationSelector 
//                 selectedCities={selectedCities} 
//                 setSelectedCities={setSelectedCities} 
//             />
//             <div className="main-city">
//                 <MainWeatherCard />
//             </div>
//             <div className="other-cities">
//                 <WeatherGrid selectedCities={selectedCities} />
//             </div>
//         </div>
//     );
// };

// export default HomeScreen;

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