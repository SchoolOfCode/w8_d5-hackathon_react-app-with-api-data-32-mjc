import React from "react";

function Time({ datetime }) {
  function prettyDate() {
    let date = datetime.split(":");
    return date[0];
  }

  return (
    <>
      <p> {prettyDate()}</p>
    </>
  );
}

export default Time;
