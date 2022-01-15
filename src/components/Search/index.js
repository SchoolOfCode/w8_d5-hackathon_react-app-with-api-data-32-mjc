import { useState } from "react";

function Search({ handleClick }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleCountry(event) {
    setCountry(event.target.value);
  }

  return (
    <>
      <input placeholder="Your city here" onChange={handleCity}></input>
      <input placeholder="Country (optional)" onChange={handleCountry}></input>
      <button onClick={() => handleClick(city, country)}>Get Weather</button>
    </>
  );
}

export default Search;
