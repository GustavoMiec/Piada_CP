import React from "react";
import ReactDOM from "react-dom";
import JokeList from "./JokeList";
import FavoriteJokes from "./FavoriteJokes";
import "./styles.css";

ReactDOM.render(
  <div>
    <JokeList />
    <FavoriteJokes />
  </div>,
  document.getElementById("root")
);
