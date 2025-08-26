import React from "react";
import ReactDOM from "react-dom";
import JokeList from "./JokeList";
import FavoriteJokes from "./FavoriteJokes";
import "./styles.css";

const appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh"
};

ReactDOM.render(
  <div style={appStyle}>
    <h1>Meu App de Piadas do Chuck Norris</h1>
    <JokeList />
    <FavoriteJokes />
  </div>,
  document.getElementById("root")
);
