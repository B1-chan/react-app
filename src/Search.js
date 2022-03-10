import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form id="city-form" className="col-2">
        <input
          type="search"
          placeholder="Enter city name"
          className="form-control"
          autofocus="on"
          id="city-input"
        />{" "}
        <input type="submit" value="Check weather" className="button" />
      </form>
    </div>
  );
}
