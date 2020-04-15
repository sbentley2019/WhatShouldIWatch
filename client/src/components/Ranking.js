import React, { useState, useEffect } from "react";
import { movies } from "../testData";
import "./Ranking.scss";

export default function Ranking(props) {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    setRank([...movies, ...rank]);
  }, []);

  return (
    <>
      <h1>Ranking</h1>
      <div className="ranking-div">
        <table>
          <thead>
            <tr>
              <th>rank</th>
              <th>title</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {rank.map((movie, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{`${movie.title} (${movie.date})`}</td>
                  <td>{movie.rating}</td>
                  <td className="rank-img">
                    <img src={movie.src} />
                  </td>
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
