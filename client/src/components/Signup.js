import React, { useState } from "react";
import "./Signup.scss";

export default function Signup(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    repassword: ""
  });

  const submitForm = function(e) {
    e.preventDefault();
    console.log("login", user);
  };

  const handleUser = function(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <form onSubmit={submitForm}>
        <h1>Signup</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleUser}
        />

        <input
          type="email"
          name="email"
          placeholder="Example@email.com"
          value={user.email}
          onChange={handleUser}
        />

        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={user.username}
            onChange={handleUser}
          />
          <span>icon</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={user.password}
            name="password"
            onChange={handleUser}
          />
          <span>icon</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={user.repassword}
            name="repassword"
            onChange={handleUser}
          />
          <span>icon</span>
        </div>
        <button>Submit</button>
      </form>
    </main>
  );
}
