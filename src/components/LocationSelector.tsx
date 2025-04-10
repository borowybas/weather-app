// import React, { useEffect, useState } from "react";
// import { fetchWeatherByCity, searchCity } from "../api/weather";
// import { FaSearch } from "react-icons/fa";

// const LocationSelector = () => {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState<any[]>([]);
//     const [selectedCities, setSelectedCities] = useState<any[]>([]);

//     const handleSearch = async () => {
//         if (query.length < 3) {
//             setResults([]);
//             return;
//         }
//         const data = await searchCity(query);
//         setResults(data);
//     };

//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     const handleCheckboxChange = (cityName: string) => {
//         // setSelectedCities((prev) => {
//         //     if (prev.includes(city)) {
//         //         return prev.filter((c) => c !== city);
//         //     } else {
//         //         return [...prev, city];
//         //     }
//         // })
//         setSelectedCities((prev) => {
//             if (prev.find((c) => c.name === cityName)) {
//               return prev.filter((c) => c.name !== cityName);
//             } else {
//               return [...prev, results.find((r) => r.name === cityName)];
//             }
//           });
//     };

//     const handleSearchElementClick = (cityName: string) => {
//         console.log("City clicked:", cityName);
//         // setSelectedCities((prev) => {
//         //     if (prev.includes(city)) {
//         //         return prev.filter((c) => c !== city);
//         //     } else {
//         //         return [...prev, city];
//         //     }
//         // })
//         const city = results.find((r) => r.name === cityName);
//         if (!city) return;
//         setSelectedCities((prev) => {
//             if (prev.find((c) => c.name === cityName)) {
//                 return prev;
//             } else {
//                 return [...prev, city];
//             }
//         });
//     };

//     return (
//         <div className="location-selector">
//             <div className="location-selector-input-container">
//                 <FaSearch id="location-selector-icon" />
//                 <input
//                     // type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     placeholder="Search for a city..."
//                     className="location-selector-input"
//                     >
//                     {/* <button onClick={handleSearch} className="location-selector-button">Search</button> */}
//                 </input>
//                 <div className="location-selector-results">
//                     {/* { results.map((result, id) => {
//                         return <div key={id} onClick={() => handleSearchElementClick(result.name)}>{result.name}</div>
//                     }
//                     )} */}
//                     {results.map((result, id) => (
//                         <div
//                             key={id}
//                             onClick={() => handleSearchElementClick(result.name)}
//                             className="location-selector-result-item"
//                         >
//                             {result.name}, 
//                             {result.region && result.region !== 'null' ? result.region+',' : ''}
//                             {result.country}
//                         </div>
//                     ))}
//                 </div>
//             </div>
            
//             <ul className="location-selector-list">
//                     {/* {selectedCities.map((city) => (
                        
//                         <li key={city.id} className="location-selector-item">
//                             <input
//                                 type="checkbox"
//                                 id={city.name}
//                                 name={city.name}
//                                 checked={selectedCities.includes(city.name)}
//                                 onChange={() => handleCheckboxChange(city.name)}
//                             />
//                             {city.name}, {city.country}, {city.region}
//                         </li>
//                     ))} */}
//                 {selectedCities.map((city, idx) => (
//                     <li key={idx} className="location-selector-item">
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={selectedCities.some((c) => c.name === city.name)}
//                                 onChange={() => handleCheckboxChange(city.name)}
//                             />
//                             {city.name}, {city.country}, {city.region}
//                         </label>
//                     </li>
//                 ))}
//                 </ul>
            
//             {/* <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Search for a city..."
//                 className="location-selector-input"
//             />
//             <button onClick={handleSearch} className="location-selector-button">Search</button>
//             {results.length > 0 && (
//                 <ul className="location-selector-list">
//                     {results.map((city) => (
                        
//                         <li key={city.id} className="location-selector-item">
//                             <input
//                                 type="checkbox"
//                                 id={city.name}
//                                 name={city.name}
//                                 checked={selectedCities.includes(city.name)}
//                                 onChange={() => handleCheckboxChange(city.name)}
//                             />
//                             {city.name}, {city.country}, {city.region}
//                         </li>
//                     ))}
//                 </ul>
//             )} */}
//         </div>
//     );
// }

// export default LocationSelector;

//-----------------============================---------------------------------------------------------------------------

// import React, { useState } from "react";
// import { fetchWeatherByCity, searchCity } from "../api/weather";
// import { FaSearch } from "react-icons/fa";

// const LocationSelector = ({ selectedCities, setSelectedCities }: { 
//     selectedCities: any[], 
//     setSelectedCities: React.Dispatch<React.SetStateAction<any[]>> 
// }) => {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState<any[]>([]);

//     const handleSearch = async () => {
//         if (query.length < 3) {
//             setResults([]);
//             return;
//         }
//         const data = await searchCity(query); // Assume this fetches city data
//         setResults(data);
//     };

//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     const handleCheckboxChange = (cityName: string) => {
//         const city = results.find((r) => r.name === cityName);
//         if (!city) return;

//         setSelectedCities((prev) => {
//             if (prev.find((c) => c.name === cityName)) {
//                 return prev.filter((c) => c.name !== cityName); // Remove city if unchecked
//             } else {
//                 return [...prev, city]; // Add city if checked
//             }
//         });
//     };



//     return (
//         <div className="location-selector">
//             <div className="location-selector-input-container">
//                 <FaSearch id="location-selector-icon" />
//                 <input
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     placeholder="Search for a city..."
//                     className="location-selector-input"
//                 />
//                 <div className="location-selector-results">
//                     {results.map((result, id) => (
//                         <div
//                             key={id}
//                             onClick={() => handleCheckboxChange(result.name)}
//                             className="location-selector-result-item"
//                         >
//                             {result.name}, 
//                             {result.region && result.region !== 'null' ? result.region + ',' : ''}
//                             {result.country}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <ul className="location-selector-list">
//                 {selectedCities.map((city, idx) => (
//                     <li key={idx} className="location-selector-item">
//                         <label>
//                             <input
//                                 type="checkbox"
//                                 checked={selectedCities.some((c) => c.name === city.name)}
//                                 onChange={() => handleCheckboxChange(city.name)}
//                             />
//                             {city.name}, {city.country}, {city.region}
//                         </label>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default LocationSelector;

//-----------------============================---------------------------------------------------------------------------

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchWeatherByCity, searchCity } from "../api/weather"; // Ensure this function fetches full weather data

const LocationSelector = ({ selectedCities, setSelectedCities }: { 
    selectedCities: any[], 
    setSelectedCities: React.Dispatch<React.SetStateAction<any[]>> 
}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);

    // const handleSearch = async () => {
    //     if (query.length < 3) {
    //         setResults([]);
    //         return;
    //     }
    //     const data = await searchCity(query); // Assume this fetches city data
    //     setResults(data);
    // };

    const handleSearch = async () => {
        if (query.length < 3) {
            setResults([]); // Jeśli zapytanie jest za krótkie, wyczyść wyniki
            return;
        }
        const data = await searchCity(query); // Wywołanie API do wyszukiwania lokalizacji
        setResults(data); // Ustaw wyniki w stanie
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // const handleCheckboxChange = async (cityName: string) => {
    //     const city = results.find((r) => r.name === cityName);
    //     if (!city) return;

    //     if (selectedCities.find((c) => c.location.name === cityName)) {
    //         // Remove city if unchecked
    //         setSelectedCities((prev) => prev.filter((c) => c.location.name !== cityName));
    //     } else {
    //         // Fetch full weather data and add it to selectedCities
    //         const weatherData = await fetchWeatherByCity(cityName); // Fetch full weather data
    //         setSelectedCities((prev) => [...prev, weatherData]);
    //     }
    // };

    const handleCheckboxChange = async (cityName: string) => {
        const city = results.find((r) => r.name === cityName); // Znajdź lokalizację w wynikach
        if (!city) return;
    
        if (selectedCities.find((c) => c.location.name === cityName)) {
            // Usuń lokalizację, jeśli checkbox jest odznaczony
            setSelectedCities((prev) => prev.filter((c) => c.location.name !== cityName));
        } else {
            // Pobierz dane pogodowe i dodaj lokalizację do grida
            const weatherData = await fetchWeatherByCity(cityName); // Wywołanie API do pobrania danych pogodowych
            setSelectedCities((prev) => [...prev, weatherData]);
        }
    };

    return (
        <div className="location-selector">
            <div className="location-selector-input-container">
                <FaSearch id="location-selector-icon" />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for a city..."
                    className="location-selector-input"
                />
                <div className="location-selector-results">
                    {results.map((result, id) => (
                        <div
                            key={id}
                            onClick={() => handleCheckboxChange(result.name)}
                            className="location-selector-result-item"
                        >
                            {result.name}, 
                            {result.region && result.region !== 'null' ? result.region + ',' : ''}
                            {result.country}
                        </div>
                    ))}
                </div>
            </div>
            <ul className="location-selector-list">
                {selectedCities.map((city, idx) => (
                    <li key={idx} className="location-selector-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedCities.some((c) => c.location.name === city.location.name)}
                                onChange={() => handleCheckboxChange(city.location.name)}
                            />
                            {city.location.name}, {city.location.country}, {city.location.region}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationSelector;