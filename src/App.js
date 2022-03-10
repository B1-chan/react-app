import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Temperature from "./Temperature";
import CurrentCity from "./CurrentCity";

export default function App() {
  return (
    <div>
      <div className="container">
        <CurrentCity />
        <Temperature />
        <Search />
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/B1-chan/react-app"
            rel="noreferrer"
            alt="github-link"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Bianca Mitsuoka
        </small>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
