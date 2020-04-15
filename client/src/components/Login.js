import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";

export default function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const submitForm = async function (e) {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:3001/api/users/login", user)
        .then((res) => {
          console.log("res", res.data);
          if (res.data.success) {
            props.setState({
              isLoggedIn: true,
              user: { username: user.username },
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUser = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-div">
      <h1>Login</h1>
      <form className="login-form" onSubmit={(e) => submitForm(e)}>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleUser}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleUser}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
