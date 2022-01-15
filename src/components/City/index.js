import React from "react";

function City({ cityName, countryCode }) {
  return (
    <>
      <p> {cityName}</p>
      <p> {countryCode}</p>
    </>
  );
}

export default City;
