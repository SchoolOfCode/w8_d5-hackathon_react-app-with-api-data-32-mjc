import { useState } from "react";

function Search({handleClick}) {
  const [text, setText] = useState("");

  function userInput(event) {
    setText(event.target.value);
  }

  return (
    <>
      <input placeholder="Your city here" onChange={userInput}></input>
      <button onClick={()=>handleClick(text)}>Get Weather</button>
    </>
  );
}

export default Search;
