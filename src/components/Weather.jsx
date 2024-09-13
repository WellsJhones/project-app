import './Weather.css'
import clear from '../assets/icons/01d.png'
import humidity from '../assets/icons/humidity.png'
import wind from '../assets/icons/cloud.png'
import nighClear from '../assets/icons/01n.png'
import rain from '../assets/icons/09d.png'
import snow from '../assets/icons/13d.png'
import nightRain from '../assets/icons/09n.png'
import nighSnow from '../assets/icons/13n.png'
import cloud from '../assets/icons/04d.png'
import nightCloud from '../assets/icons/04n.png'
import o2d from '../assets/icons/02d.png'
import o2n from '../assets/icons/02n.png'
import o3d from '../assets/icons/03d.png'
import o3n from '../assets/icons/03n.png'
import o10d from '../assets/icons/10d.png'
import o10n from '../assets/icons/10n.png'
import o11d from '../assets/icons/11d.png'
import o11n from '../assets/icons/11n.png'
import o50d from '../assets/icons/50d.png'
import o50n from '../assets/icons/50n.png'
import searchImg from '../assets/icons/search(1).png'
import cold from '../assets/icons/cold.png'
import hot from '../assets/icons/hot.png'
const apiKey = import.meta.env.VITE_APP_ID
import { useRef, useState, useEffect } from 'react';

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIconst = {
    '01d': clear,
    '01n': nighClear,
    '02d': o2d,
    '02n': o2n,
    '03d': o3d,
    '03n': o3n,
    '04d': cloud,
    '04n': nightCloud,
    '09d': rain,
    '09n': nightRain,
    '10d': o10d,
    '10n': o10n,
    '11d': o11d,
    '11n': o11n,
    '13d': snow,
    '13n': nighSnow,
    '50d': o50d,
    '50n': o50n

  }

  const search = async (city)=>{
    if(city === '') {
      alert('Please enter a city name')
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIconst[data.weather[0].icon] || clear;
      setWeatherData({
        temperature: Math.floor(data.main.temp),
        location: data.name,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: icon
      })

    } catch (error) {
     setWeatherData(false)
     console.error("Error in fetching weather data", error)
    }
  }
  useEffect(() => {
    search("Brasilia")
  }, [])
  const getBackgroundImage = (temperature) => {
  return temperature > 15 ? hot : cold;
};

  return (
            <div className="weather" style={{ backgroundImage: `url(${weatherData ? getBackgroundImage(weatherData.temperature) : ''})` }}>

       <div className="search-bar">
            <input ref={inputRef} type="text" placeholder="Search..." />
            <img src={searchImg} alt=""  onClick={()=> search(inputRef.current.value)}/>
        </div>
        {weatherData?<>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
        <p className='temperature'>
          {weatherData.temperature}°C</p>
          <p className='location'>{weatherData.location}</p>
          <div className='weather-data'>
            <div className='col'>
              <img src={humidity} alt="" />
              <div><p>{weatherData.humidity}%</p>
              <span>Humidity</span></div>
              
            </div>
            <div className='col'>
              <img src={wind} alt="" />
              <div>
                <p>{weatherData.wind}Km/h</p>
              <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>:<></>}
        
        
        </div>
  )
}

export default Weather