import React, { useState } from "react";
import "./About.scss";

export default function About(props) {
  const [user, setUser] = useState({ name: "", email: "", message: "" });

  const handleUser = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="about-div">
      <h1>About This Site</h1>
      <ul>
        <li>
          This entertainment app was created for the purpose of displaying my
          abilities using Nodejs, Express, Reactjs and PostgreSQL on my
          portfolio.
        </li>
        <li>Created by Stewart Bentley.</li>
      </ul>

      <form className="about-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Contact Us</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleUser}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleUser}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={user.message}
            placeholder="Message..."
            rows="4"
            onChange={handleUser}
          />
        </label>
      </form>
    </div>
  );
}
