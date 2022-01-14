import React from "react";

function DisplayList({ locations, handleClick }) {
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
              background: "white",
            }}
          >
            <p>City: {location.cityName}</p>
            <p>Country Code: {location.countryCode}</p>
            <button
              onClick={() =>
                handleClick(location.cityName, location.countryCode)
              }
            >
              View Weather Here
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayList;
