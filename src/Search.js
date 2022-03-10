import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form id="city-form">
        {" "}
        <div class="row">
          <div class="col-7">
            <input
              type="search"
              placeholder="Enter city name"
              class="form-control"
              autofocus="on"
              id="city-input"
            />
          </div>
          <div class="col-4">
            {" "}
            <input type="submit" value="Check weather" class="button" />
          </div>
        </div>
      </form>
    </div>
  );
}
