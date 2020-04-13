import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <>
      <nav className="options-nav">
        <figure>
          <Link to="/">
            <i className="fas fa-home fa-3x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/search">
            <i className="fas fa-search fa-3x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/ranking">
            <i className="fas fa-list-ol fa-3x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/">
            <i className="fas fa-dice fa-3x"></i>
          </Link>
        </figure>
        <figure>
          <Link to="/about">
            <i className="fas fa-info-circle fa-3x"></i>
          </Link>
        </figure>
      </nav>
      <div className="user-div">
        {props.state.isLoggedIn ? (
          <>
            <Link to="/profile">
              <figure>
                <i className="far fa-address-card fa-3x"></i>
              </figure>
            </Link>
            <figure>
              <i
                className="fas fa-sign-out-alt fa-3x"
                onClick={() => props.logout()}
              ></i>
            </figure>
          </>
        ) : (
          <>
            <figure>
              <Link to="/login">
                <i className="fas fa-user-circle fa-3x"></i>
              </Link>
            </figure>
            <figure>
              <Link to="/signup">
                <i className="fas fa-user-plus fa-3x"></i>
              </Link>
            </figure>
          </>
        )}
      </div>
    </>
  );
}
