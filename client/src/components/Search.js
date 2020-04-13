import React, { useState, useEffect } from "react";
import { genre } from "../testData";
import "./Search.scss";

export default function Search(props) {
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState({
    title: "",
    type: "all",
    date: [0, 3000],
    rating: [0, 10],
    genre: {},
    sortBy: "alphabetical",
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
    if (
      e.target.name === "type" ||
      e.target.name === "title" ||
      e.target.name === "sortBy"
    ) {
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
          <h3>Title</h3>
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
          <h3>Type</h3>
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
        <div className="searchDate-div search-section">
          <h3>Release Date</h3>
          <input type="number" name="date-from" value={state.date[0]} />
          <span>to</span>
          <input type="number" name="date-to" value={state.date[1]} />
        </div>
        <hr />
        <div className="searchRating-div search-section">
          <h3>Rating</h3>
          <input type="number" name="from" value={state.rating[0]} />
          <span>to</span>
          <input type="number" name="to" value={state.rating[1]} />
        </div>
        <hr />
        <div className="searchSort-div search-section">
          <h3>Sort by</h3>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="alphabetical"
              checked={state.sortBy === "alphabetical"}
              onChange={(e) => handleState(e)}
            />
            Alphabetical
          </label>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="rating"
              checked={state.sortBy === "rating"}
              onChange={(e) => handleState(e)}
            />
            Ratings
          </label>
          <label>
            <input
              type="radio"
              name="sortBy"
              value="views"
              checked={state.sortBy === "views"}
              onChange={(e) => handleState(e)}
            />
            Views
          </label>
        </div>
        <hr />
        <div className="search-section">
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
}
