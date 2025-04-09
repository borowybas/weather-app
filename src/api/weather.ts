import axios from 'axios';

// TODO: Trnsfer to env
const API_KEY ='';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByCity = async (city: string) => {
    const response = await axios.get(`${BASE_URL}`, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
        },
        
    });
    console.log(response.data);
    return response.data;
    // )
    // fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching weather data:', error);
    //     });
        
};


// equest_url = f'https://api.openweathermap.org/data/2.5/weather?appid={os.getenv("API_KEY")}&q={city}&units=metric'

//     weather_data = requests.get(request_url).json()

//     return weather_data