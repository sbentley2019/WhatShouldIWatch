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
