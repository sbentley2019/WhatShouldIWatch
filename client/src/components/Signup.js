import React, { useState } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

export default function Signup(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
  });

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

      <h1>Signup</h1>
      <form className="signup-form" onSubmit={submitForm}>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleUser}
        />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Example@email.com"
          value={user.email}
          onChange={handleUser}
        />
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleUser}
        />
        <label for="password">Password:</label>
        <input
          type="password"
          placeholder="password"
          value={user.password}
          name="password"
          onChange={handleUser}
        />
        <label for="repassword">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={user.repassword}
          name="repassword"
          onChange={handleUser}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
