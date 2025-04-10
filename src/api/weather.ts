import axios from 'axios';
import { environment } from '../environments/environment';

const API_KEY = environment.apiKey;
const BASE_URL = 'http://api.weatherapi.com/v1';

export const searchCity = async (city: string) => {
    const response = await axios.get(`${BASE_URL}/search.json`, {
        params: {
            q: city,
            key: API_KEY,
            // units: 'metric',
        },
        
    });
    console.log(response.data);
    return response.data;
        
};

// export const fetchWeatherByCity = async (city: string) => {
//     const response = await axios.get(`${BASE_URL}/current.json`, {
//         params: {
//             q: city,
//             appid: API_KEY,
//             aqi: 'no',
//         },
        
//     });
//     console.log(response.data);
//     return response.data;
//     // )
//     // fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
//     //     .then((response) => response.json())
//     //     .then((data) => {
//     //         console.log(data);
//     //     })
//     //     .catch((error) => {
//     //         console.error('Error fetching weather data:', error);
//     //     });
        
// };
export const fetchWeatherByCity = async (cityName: string) => {
    // const apiKey = ""; 
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};


// equest_url = f'https://api.openweathermap.org/data/2.5/weather?appid={os.getenv("API_KEY")}&q={city}&units=metric'

//     weather_data = requests.get(request_url).json()

//     return weather_data