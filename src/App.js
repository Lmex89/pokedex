import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import axios from "axios";

// this is Luis Mex branch
const Pokedex = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const promise = axios(url);

    promise.then((res) => {
      setPokemon(res.data.sprites.front_shiny);
    });
  });

  return (
    <div>
      <img src={pokemon} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Candidato a useCallback y una explicacion del porque

  return (
    <div>
      <input onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>
    </div>
  );
};

function App() {
  const [pokes, setPokes] = useState([]);
  const [typeOfPok, SeTTypePok] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [poksperPage] = useState(10);

  // Llamar PokeAPI
  useEffect(() => {
    if (typeOfPok) {
      const promise = axios(`https://pokeapi.co/api/v2/type/${typeOfPok}`);

      promise.then((res) => {
        setPokes(res.data.pokemon);
      });
    }
  }, [typeOfPok]);

  useEffect(() => {
    console.log(pokes);
  }, [pokes]);

  const handleSearchPokemons = (value) => {
    SeTTypePok(value);
  };

  const myArrOfPokemons = pokes.map((value) => (
    <Pokedex
      name={value.pokemon.name}
      url={value.pokemon.url}
      key={value.pokemon.name}
    />
  ));

  const indexOfLastPost = currentPage * poksperPage;
  const indexofFirstPost = indexOfLastPost - poksperPage;
  const currentPoks = myArrOfPokemons.slice(indexofFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Pokedex</h1>
      <Search handleSearch={handleSearchPokemons} />
      {pokes.length > 0 && currentPoks}
      <Pagination
        poksPerPage={poksperPage}
        totalPoks={myArrOfPokemons.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
