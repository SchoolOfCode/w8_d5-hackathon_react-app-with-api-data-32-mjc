import { useState } from "react";

function Search() {
  const [text, setText] = useState("");

  function userInput(event) {
    setText(event.target.value);
  }

  return (
    <>
      <input placeholder="Your city here" onChange={userInput}></input>
      <button>Get Weather</button>
    </>
  );
}

export default Search;
