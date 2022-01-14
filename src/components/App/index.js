import { useState, useEffect } from "react";
import "./App.css";
import Search from "../Search";
import Display from "../Display";
import DisplayList from "../DisplayList";

function App() {
  const [searchCity, setSearchCity] = useState(undefined);
  const [searchCountry, setSearchCountry] = useState(undefined);
  const [weather, setWeather] = useState(undefined);
  const [locations, setLocations] = useState([]);

  /* 
  [{
    cityName: "",
    countryCode: ""
  }] */

  useEffect(() => {
    //fetch data from the api, when the user clicks the button (which updates searchCity)

    async function fetchData() {
      let URL = `https://api.weatherbit.io/v2.0/current?key=ee51ab2f856b4b1394f20735c3a99968&city=${searchCity}`;

      if (searchCountry) {
        URL += `&country=${searchCountry}`;
      }

      const response = await fetch(URL);

      const data = await response.json();
      const weatherData = {
        datetime: data.data[0].datetime,
        cityName: data.data[0].city_name,
        countryCode: data.data[0].country_code,
        temp: data.data[0].temp,
        tempFeelsLike: data.data[0].app_temp,
        iconUrl: `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`,
        description: data.data[0].weather.description,
      };
      setWeather(weatherData);
    }
    if (searchCity) {
      fetchData();
    }
  }, [searchCity, searchCountry]);

  function addLocation(city, country) {
    setLocations([
      ...locations,
      {
        cityName: city,
        countryCode: country,
      },
    ]);
  }

  function handleClick(city, country) {
    setSearchCity(city);
    setSearchCountry(country);
  }

  return (
    <div className="App">
      <h1>Weather</h1>
      <Search handleClick={handleClick}></Search>
      {weather && <Display weather={weather} handleClick={addLocation} />}
      <DisplayList locations={locations} handleClick={handleClick} />
    </div>
  );
}

export default App;
