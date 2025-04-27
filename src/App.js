import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lodeme-pendergraph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lodemé Pendergraph
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Lodeme101/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weatherinreact.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
