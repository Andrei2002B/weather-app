import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const API_KEY = '54660540391fe32835f3ee8c970f4a66';

function App() {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('history')) || [];
  });

  const { dark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (!query) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
        );

        if (!res.ok) throw new Error('Orașul nu a fost găsit!');

        const data = await res.json();
        setWeather(data);
        setError(null);
        updateHistory(query);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [query]);

  const updateHistory = (newCity) => {
    const updated = [newCity, ...history.filter((c) => c !== newCity)].slice(0, 5);
    setHistory(updated);
    localStorage.setItem('history', JSON.stringify(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) setQuery(city.trim());
  };

  const appStyle = {
    fontFamily: 'Arial',
    maxWidth: 400,
    margin: 'auto',
    padding: 20,
    background: dark ? '#222' : '#fff',
    color: dark ? '#fff' : '#000',
    minHeight: '100vh',
  };

  return (
    <div style={appStyle}>
      <h2>🌤️ Weather App</h2>
      <button onClick={toggleTheme} style={{ marginBottom: 20 }}>
        Schimbă în {dark ? 'light' : 'dark'} mode
      </button>

      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Introdu orașul"
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <button type="submit" style={{ padding: 8, width: '100%' }}>
          Află vremea
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: 20 }}>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>💧 Umiditate: {weather.main.humidity}%</p>
          <p>🌬️ Vânt: {weather.wind.speed} m/s</p>
          <p>🔍 Condiții: {weather.weather[0].description}</p>
        </div>
      )}

      {history.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <h4>📌 Istoric căutări:</h4>
          <ul>
            {history.map((item, i) => (
              <li key={i}>
                <button onClick={() => setQuery(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
