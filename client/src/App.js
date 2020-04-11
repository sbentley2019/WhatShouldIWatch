import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Ranking from "./components/Ranking.js";
import Search from "./components/Search.js";
import Profile from "./components/Profile.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  const [state, setState] = useState({ isLoggedIn: false, user: null });

  const logout = function () {
    setState({ isLoggedIn: false, user: null });
  };

  return (
    <Router>
      <Navbar state={state} logout={logout} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login state={state} setState={setState} />
          </Route>
          <Route path="/signup">
            <Signup state={state} setState={setState} />
          </Route>
          <Route path="/profile">
            <Profile state={state} setState={setState} />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
