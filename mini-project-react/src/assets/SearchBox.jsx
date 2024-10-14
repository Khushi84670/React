import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ff8e6b51cc6465455c3b34c70986e78a";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null; // or handle the error as needed
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
    } else {
      // Handle error state or notify user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  );
}
