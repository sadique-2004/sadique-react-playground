import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoCard from './InfoCard'
import './WeatherApp.css'

export const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'London',
        temp: 20,
        tempMin: 10,
        tempMax: 30,
        humidity: 50,
        feelsLike: 25,
        Weather: 'Clear',
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
       
        <div className='weather-app'>
            
            <h1>Quick Weather</h1>
            <h2>Find the weather in your city</h2>

            <SearchBox updateInfo = {updateWeatherInfo} />
            <InfoCard info = {weatherInfo} />
        </div>
    )
}
