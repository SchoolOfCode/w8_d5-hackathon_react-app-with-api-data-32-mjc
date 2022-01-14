import React from "react";

function Temperature({ temp, tempFeelsLike }) {
  return (
    <>
      <p> {temp}°C</p>
      <p> {tempFeelsLike}°C</p>
    </>
  );
}

export default Temperature;
