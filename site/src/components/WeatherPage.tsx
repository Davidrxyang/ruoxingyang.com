import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherPage.css';

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (latitude: number, longitude: number) => {
      const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; // Replace with your OpenWeather API key
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      try {
        const response = await axios.get(URL);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching weather data');
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            setError('Error getting location');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser');
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="WeatherPage">
      <div className="WeatherCard">
        <h1>Current Weather</h1>
        <h2>{weatherData.name}</h2>
        <div className="WeatherInfo">
          <div className="WeatherIcon">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
          <div className="WeatherDetails">
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Condition: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
