import React from "react";

import css from "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This page was coded by{" "}
        <a href="https://github.com/sisandamthabela" target="_blank">
          Sisanda Mthabela
        </a>{" "}
        and is open-source on
        <a
          href="https://github.com/sisandamthabela/react-github-hosting"
          target="_blank"
        >
          {" "}
          github
        </a>
      </p>
    </div>
  );
}
