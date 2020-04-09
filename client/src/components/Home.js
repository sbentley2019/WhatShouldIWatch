import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <h1>What Should I Watch?</h1>
      <div className="options-div">
        <figure>
          <Link to="/">
            <i class="fas fa-home fa-5x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/search">
            <i class="fas fa-search fa-5x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/ranking">
            <i class="fas fa-list-ol fa-5x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/">
            <i class="fas fa-dice fa-5x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/login">
            <i class="fas fa-user-circle fa-5x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/signup">
            <i class="fas fa-user-plus fa-5x"></i>
          </Link>
        </figure>
      </div>
    </>
  );
}
