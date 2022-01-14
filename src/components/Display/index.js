import React from "react";
import Temperature from "../Temperature";
import City from "../City";
import Time from "../Time";
import Icon from "../Icon";

function Display({ weather }) {
  return (
    <>
      <Icon iconUrl={weather.iconUrl} />
      <Temperature
        temp={weather.temp}
        tempFeelsLike={weather.tempFeelsLike}
      ></Temperature>
      <City
        cityName={weather.cityName}
        countryCode={weather.countryCode}
      ></City>
      <Time datetime={weather.datetime}></Time>
    </>
  );
}

export default Display;
