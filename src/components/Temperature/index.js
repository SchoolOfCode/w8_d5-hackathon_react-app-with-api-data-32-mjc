import React from "react";

function Temperature({ temp, tempFeelsLike }) {
  return (
    <>
      <p> {temp}°C</p>
      <p>Feels like {tempFeelsLike}°C</p>
    </>
  );
}

export default Temperature;
