import { useState, useEffect } from "react";
import "./App.css";
import Search from "../Search";

function App() {
  const [searchCity,setSearchCity]=useState(undefined);
  const [weather, setWeather] = useState(undefined);

  function handleClick(text){
    setSearchCity(text)
  }

  useEffect( () => {
    //fetch data from the api, when the user clicks the button (which updates searchCity)

    async function fetchData() {
      const response = await fetch(`https://api.weatherbit.io/v2.0/current?key=ee51ab2f856b4b1394f20735c3a99968&city=${searchCity}`);
      const data = await response.json();
      const weatherData = {
        datetime: data.datetime,
        cityName: data.city_name,
        countryCode: data.country_code,
        temp: data.temp,
        tempFeelsLike: data.app_temp,
        //iconUrl: `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`,
        //description: data.weather.description
      }
      setWeather(weatherData);
    }

    if (searchCity) {
      fetchData();
    }
  }, [searchCity]);

  return (
    <div className="App">
      <h1>Weather</h1>
      <Search handleClick={handleClick}></Search>
    </div>
  );
}

export default App;
