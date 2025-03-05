import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const CITY = "Montgomery";

    useEffect(() => {
        const fetchData = async () => {
        try{
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=195097a2c62bee5780414be1d75cff9c`
            );

            if(response.ok){
                throw new Error("Request failed");
            }

           
            setWeather(response.data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    fetchData();
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!weather || !weather.main) return <p>No weather data available.</p>;



  return (
    <div className="weather-card">
    <h3>🌦️ Weather</h3>
    <p className="weather-temp">{weather.main.temp}°F</p>
    <p className="weather-desc">{weather.weather[0].description}</p>
  </div>

  )
}
export default Weather
