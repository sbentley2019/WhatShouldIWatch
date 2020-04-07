import React, { useState } from "react";
import "./Login.scss";

export default function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const submitForm = function(e) {
    e.preventDefault();
    console.log("login", user);
  };

  const handleUser = function(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={e => submitForm(e)}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={user.username}
        onChange={handleUser}
      />
      <input
        type="password"
        placeholder="password"
        value={user.password}
        name="password"
        onChange={handleUser}
      />
      <button>Enter</button>
      <p>{user.username + " " + user.password}</p>
    </form>
  );
}
