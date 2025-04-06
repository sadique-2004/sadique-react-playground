
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';

const SearchBox = ({ updateInfo }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState(null); // Error state

    const API_url = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '40bc3d5758ac65268cad2420c949d50f'; // Use your real API key

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_url}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            let result = {
                city: data.name,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                Weather: data.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(`Could not fetch weather data for ${city} . Please try again. 😢`);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!city) {
            console.log("Please enter a city");
            return;
        }
        console.log(`Fetching weather for ${city}`);
        setCity('');
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
    };

    // clear error message after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setError(null);
        }, 3000);
        return () => clearTimeout(timer)

    }, [error])

    return (
        <div className='search-box'>
            <p>Find the weather in your city</p>
            <form onSubmit={handleSubmit} className='search-form'>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    size='small'
                    value={city}
                    onChange={handleChange}
                    required
                />
                <Button size='large' type='submit'>
                    <SearchIcon size='large' />
                </Button>
            </form>

            {/* Display error message if there is an error */}
            {error && <p className="error">{error}</p>}

        </div>
    );
};

export default SearchBox;
