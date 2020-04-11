import React, { useState } from "react";
import "./Login.scss";

export default function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const submitForm = function (e) {
    e.preventDefault();
    props.setState({
      isLoggedIn: true,
      user: { username: user.username },
    });
  };

  const handleUser = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-div">
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
    </div>
  );
}
