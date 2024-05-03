import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchCharacters = async (filter = "") => {
    const status = filter !== "all" ? filter : "";
    const query = JSON.stringify({
      query: `{
        characters(filter: { status: "${status}" }) {
          results {
            id
            name
            status
			species
            image
            location {
              name
            }
          }
        }
      }`,
    });

    const response = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: query,
    });

    const jsonResponse = await response.json();
    setCharacters(jsonResponse.data.characters.results);
  };

  useEffect(() => {
    fetchCharacters(filter);
  }, [filter]);

  const handleFilterClick = (status) => {
    setFilter(status);
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="max-w-screen-2xl mx-auto px-1 pt-16 my-8">
        <h1 className="text-4xl font-bold text-left mb-4">Character List</h1>
        <div className="mb-8">
          <button
            onClick={() => handleFilterClick("all")}
            className="m-1 p-2 bg-blue-500 text-white rounded"
          >
            All
          </button>
          <button
            onClick={() => handleFilterClick("alive")}
            className="m-1 p-2 bg-green-500 text-white rounded"
          >
            Alive
          </button>
          <button
            onClick={() => handleFilterClick("dead")}
            className="m-1 p-2 bg-red-500 text-white rounded"
          >
            Dead
          </button>
          <button
            onClick={() => handleFilterClick("unknown")}
            className="m-1 p-2 bg-gray-500 text-white rounded"
          >
            Unknown
          </button>
          <button
            onClick={() => handleFilterClick("")}
            className="m-1 p-2 bg-yellow-500 text-white rounded"
          >
            Reset Filters
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterList;
