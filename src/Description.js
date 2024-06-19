import React from "react";

import css from "./Description.css";

export default function Description() {
  let description = {
    currentTime: "Wednesday, 14:00",
    condition: "Broken Clouds",
    humidity: 20,
    windSpeed: 5,
  };

  return (
    <div>
      <p>
        {description.currentTime}
        <br />
        {description.condition}
        <br />
        <strong>
          Humidity: {description.humidity}% | Wind Speed:{" "}
          {description.windSpeed}km/h
        </strong>
      </p>
    </div>
  );
}
