import axios from 'axios';
import { environment } from '../environments/environment';

const API_KEY = environment.apiKey;
const BASE_URL = 'http://api.weatherapi.com/v1';

export const searchCity = async (city: string) => {
    const response = await axios.get(`${BASE_URL}/search.json`, {
        params: {
            q: city,
            key: API_KEY,
        },
        
    });
    console.log(response.data);
    return response.data;
        
};


export const fetchWeatherByCity = async (cityName: string) => {
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

