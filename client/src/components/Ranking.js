import React, { useState, useEffect } from "react";
import { movies } from "../testData";
import { Link } from "react-router-dom";
import "./Ranking.scss";

export default function Ranking(props) {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    setRank([...movies, ...rank]);
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

      <h1>Ranking</h1>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>rank</th>
              <th>img</th>
              <th>title</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {rank.map((movie, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img src={movie.link} />
                  </td>
                  <td>{`${movie.title} (${movie.date})`}</td>
                  <td>{movie.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <table>
          <thead>
            <tr>
              <th>title</th>
              <th>description</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {state.recent.map((review) => {
              return (
                <tr>
                  <td>{review.title}</td>
                  <td>{review.review}</td>
                  <td>{review.rated}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>
    </>
  );
}
