import React, { useState, useEffect } from "react";
import { genre } from "../testData";
import "./Search.scss";

export default function Search(props) {
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState({
    title: "",
    type: "all",
    date: [],
    rating: [],
    genre: {},
    sortBy: "",
  });

  useEffect(() => {
    setCategories([...categories, ...genre]);
  }, []);

  const handleCheck = function (e) {
    const genre = state.genre;
    if (genre[e.target.value]) {
      delete genre[e.target.value];
    } else {
      genre[e.target.value] = true;
    }
    setState({ ...state, genre: genre });
  };

  const handleState = function (e) {
    if (e.target.name === "type" || e.target.name === "title") {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("submit:", state);
  };

  return (
    <>
      <h1>Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <hr />
        <div className="searchTitle-div search-section">
          <h3>Title:</h3>
          <input
            type="text"
            name="title"
            placeholder="eg. The Shawshank Redemption"
            value={state.title}
            onChange={(e) => handleState(e)}
          />
        </div>
        <hr />
        <div className="searchType-div search-section">
          <h3>Type:</h3>
          <label>
            <input
              type="radio"
              name="type"
              value="all"
              checked={state.type === "all"}
              onChange={(e) => handleState(e)}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="movie"
              checked={state.type === "movie"}
              onChange={(e) => handleState(e)}
            />
            Movie
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="tv"
              checked={state.type === "tv"}
              onChange={(e) => handleState(e)}
            />
            Tv Show
          </label>
        </div>
        <hr />
        <div className="searchGenre-div search-section">
          <h3>Genre</h3>
          <div>
            {categories.map((item, index) => {
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => handleCheck(e)}
                  />
                  {item}
                </label>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="search-section">
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
}
