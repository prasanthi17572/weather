import './weather.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [city, setCity] = useState('london');
  const [weatherData, setWeatherData] = useState(null);

  const APIKey = 'd13a2819528c29f763c036a8d82bfd4c'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"d13a2819528c29f763c036a8d82bfd4c"}`;

  const getData = () => {
    axios.get(url)
      .then(res => setWeatherData(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
    document.getElementById("weatherInput").focus();
  }, [])

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = () => {
    getData();
  }

  const handleKeypress = e => {

    if (e.charCode === 13) {
      getData();
    }
  };

  const name = weatherData ? weatherData.name : '';
  const country = weatherData ? weatherData.sys.country : '';
  const humidity = weatherData ? weatherData.main.humidity : '';
  const windspeed = weatherData ? weatherData.main.wind : '';
  const temp = weatherData ? weatherData.main.temp : '';
  const weather = weatherData ? weatherData.weather[0].description : '';
  const iconcode = weatherData ? weatherData.weather[0].icon : '#';

  return (
    <div className="App">
      <header className="App-header">
      <div className='all'>
        <div className="weather">
          <input className="textarea" id="weatherInput" type="text" name="city" placeholde="city name"
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          <button onClick={handleSubmit} className="btn">Search</button>
        </div>

        <div className="results" style={styles.results}>
          <div style={{ fontSize: 35 }}>{name}, {country}</div>
          <div style={{ fontSize: 54, fontWeight: 'bold' }}>{Math.round(temp)}' C</div>

          <img src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon" />

          <div style={{ textTransform: 'capitalize', marginBottom: 20 }}>{weather}</div>

          <div>Humidity : {humidity}%</div>
          <div>wind speed : {windspeed} 10m/s</div>
        </div>
        </div>
      </header>

    </div>
  );
}

const styles = {
  results: { 
    color:'#111',
    padding: '2rem',
    margin: '1rem',
   
  }
}
export default App;