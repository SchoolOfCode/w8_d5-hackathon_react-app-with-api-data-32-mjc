import { useState } from "react";
import "./App.css";
import Search from "../Search";

function App() {
  const [searchCity,setSearchCity]=useState('');
  function handleClick(text){
    setSearchCity(text)
  }
  return (
    <div className="App">
      <h1>Weather</h1>
      <Search handleClick={handleClick}></Search>
    </div>
  );
}

export default App;
