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
          abilities building a mern stack application and to showcase on my
          portfolio. Create by Stewart Bentley
        </li>
        <li>
          <div className="tmdb-div">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              alt="The Movie Database logo"
            />
            <p>
              This product uses the TMDb API but is not endorsed or certified by
              TMDb.
            </p>
          </div>
        </li>
      </ul>

      <form className="about-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Contact Us</h2>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleUser}
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleUser}
        />
        <label for="message">Message</label>
        <textarea
          name="message"
          value={user.message}
          placeholder="Message..."
          rows="4"
          onChange={handleUser}
        />
      </form>
    </div>
  );
}
