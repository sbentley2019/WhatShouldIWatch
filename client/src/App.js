import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Ranking from "./components/Ranking.js";
import Search from "./components/Search.js";

export default function App() {
  return (
    <main>
      <Router>
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
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
