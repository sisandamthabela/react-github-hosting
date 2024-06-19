import React from "react";

import css from "./Header.css";

export default function Header() {
  let weatherData = {
    city: "Johannesburg",
  };

  return (
    <div className="Search-Bar">
      <input
        type="text"
        placeholder="Enter a Location"
        className="search-input"
      />
      <input type="submit" value="Search" className="search-button" />
      <h1>{weatherData.city}</h1>
    </div>
  );
}
