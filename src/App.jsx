import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '00e156e27c2c6797ab845a53fea21367';

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.error('API error:', err));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  return (
    <div className="app">
      <h1>Weather API</h1>
      <h2>See the current weather in any city!</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          Get Weather
        </button>
      </form>

      {weatherData && <Card weather={weatherData} />}
    </div>
  );
}

export default App;
