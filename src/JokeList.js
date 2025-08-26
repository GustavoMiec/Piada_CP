import React, { useState, useEffect } from "react";
import axios from "axios";

const jokeListStyle = {
  textAlign: "center",
  padding: "20px"
};

const buttonStyle = {
  backgroundColor: "#0077cc",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer"
};

const JokeList = () => {
  const [joke, setJoke] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRandomJoke();
    loadFavorites();
  }, []);

  const getRandomJoke = () => {
    setLoading(true);
    axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      setJoke(response.data.value);
      setLoading(false);
    });
  };

  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  const addToFavorites = () => {
    const updatedFavorites = [...favorites, joke];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const deleteFavorite = (index) => {
    if (window.confirm("Tem certeza que quer deletar?")) {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div style={jokeListStyle}>
      <h2>Piadas</h2>
      <p>{loading ? "Carregando..." : joke}</p>
      <div>
        <button onClick={getRandomJoke} style={buttonStyle}>
          Atualizar Piada
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={addToFavorites} style={buttonStyle}>
          Adicionar aos Favoritos
        </button>
      </div>
      <h2>Adicionar</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite}
            <button onClick={() => deleteFavorite(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JokeList;
