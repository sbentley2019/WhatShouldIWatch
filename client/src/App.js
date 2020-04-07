import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

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
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
