import React from "react";

import css from "./Current.css";

export default function Current() {
  let current = {
    temp: 24,
  };
  return (
    <div className="d-flex justify-content-center">
      <h2 className="icon">🌧️</h2>
      <h3 className="ms-3">{current.temp}</h3>
      <h4>°C</h4>
    </div>
  );
}
