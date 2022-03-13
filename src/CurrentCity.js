import React from "react";
import axios from "axios";
import "./CurrentCity.css";

export default function Search() {
  return (
    <div>
      <h1 className="city">Osaka</h1>
      <input type="submit" class="current-btn" value="Current City" />
      <br />
    </div>
  );
}
