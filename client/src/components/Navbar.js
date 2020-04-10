import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <nav className="options-nav">
      <figure>
        <Link to="/">
          <i class="fas fa-home fa-3x"></i>
        </Link>
      </figure>
      <figure>
        <Link to="/search">
          <i class="fas fa-search fa-3x"></i>
        </Link>
      </figure>
      <figure>
        <Link to="/ranking">
          <i class="fas fa-list-ol fa-3x"></i>
        </Link>
      </figure>
      <figure>
        <Link to="/">
          <i class="fas fa-dice fa-3x"></i>
        </Link>
      </figure>
      <div className="user-div">
        <figure>
          <Link to="/login">
            <i class="fas fa-user-circle fa-3x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/signup">
            <i class="fas fa-user-plus fa-3x"></i>
          </Link>
        </figure>
      </div>
    </nav>
  );
}
