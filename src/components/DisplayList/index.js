import React from "react";

function DisplayList({ locations }) {
  return (
    <ul>
      {locations.map((location) => {
        return (
          <li
            style={{
              listStyle: "none",
              border: "solid black 1px",
              width: "40vmin",
              margin: "auto",
            }}
          >
            <p>City: {location.cityName}</p>
            <p>Country Code: {location.countryCode}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayList;
