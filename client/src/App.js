import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <header className="App-header">
        <nav>
          <Link to="/" className="nav-link">
            Navbar
          </Link>
          <div className="search-div">
            <input type="text" placeholder="search" />
            <button>Search</button>
            <button>Adv</button>
          </div>

          <div className="user-div">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </div>
        </nav>
      </header>
      <main></main>
    </Router>
  );
}
