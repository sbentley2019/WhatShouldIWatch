import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const submitForm = function (e) {
    e.preventDefault();
    console.log("login", user);
  };

  const handleUser = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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

      <h1>Login</h1>
      <form className="login-form" onSubmit={(e) => submitForm(e)}>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleUser}
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleUser}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
