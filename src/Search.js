import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div id="search-wrapper">
      <form id="city-form">
        <input
          type="search"
          placeholder="Enter city name"
          class="form-control"
          autofocus="on"
          id="city-input"
        />
        <input type="submit" value="Check weather" class="btn" />
      </form>
    </div>
  );
}
