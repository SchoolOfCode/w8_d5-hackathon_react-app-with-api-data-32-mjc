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
        datetime: data.data[0].datetime,
        cityName: data.data[0].city_name,
        countryCode: data.data[0].country_code,
        temp: data.data[0].temp,
        tempFeelsLike: data.data[0].app_temp,
        iconUrl: `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`,
        description: data.data[0].weather.description
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
