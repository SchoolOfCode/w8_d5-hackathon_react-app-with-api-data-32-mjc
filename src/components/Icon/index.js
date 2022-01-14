import React from "react";

function Icon({ iconUrl }) {
  return (
    <img
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      src={iconUrl}
      alt=""
    ></img>
  );
}

export default Icon;
