import React, { useState, useEffect } from "react";
import { genre } from "../testData";
import { Link } from "react-router-dom";
import "./Search.scss";

export default function Search(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([...categories, ...genre]);
  }, []);

  return (
    <>
      <figure className="home-figure">
        <Link to="/">
          <i class="fas fa-home fa-5x"></i>
        </Link>
      </figure>
      <figure className="ranking-figure">
        <Link to="/ranking">
          <i class="fas fa-list-ol fa-5x"></i>
        </Link>
      </figure>
      <figure className="random-figure">
        <Link to="/">
          <i class="fas fa-dice fa-5x"></i>
        </Link>
      </figure>
      <figure className="login-figure">
        <Link to="/login">
          <i class="fas fa-user-circle fa-5x"></i>
        </Link>
      </figure>
      <figure className="signup-figure">
        <Link to="/signup">
          <i class="fas fa-user-plus fa-5x"></i>
        </Link>
      </figure>

      <h1>Search</h1>
      <table>
        <thead>
          <tr>
            <th>genre</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => {
            return (
              <tr>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
