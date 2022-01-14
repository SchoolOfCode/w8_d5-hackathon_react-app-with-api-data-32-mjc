import React from "react";
import Temperature from "../Temperature";
import City from "../City";
import Time from "../Time";
import Icon from "../Icon";

function Display() {
  return (
    <>
      <Icon />
      <Temperature></Temperature>
      <City></City>
      <Time></Time>
    </>
  );
}

export default Display;
