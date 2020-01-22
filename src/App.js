import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import BeerHome from "./components/beer-home/BeerHome";
import BeerSingle from "./components/beer-single/BeerSingle";
import About from "./components/about/About";

document.addEventListener("scroll", function() {
  const header = document.querySelector(".navigation");
  window.scrollY <= 0
    ? header.classList.remove("sticky")
    : header.classList.add("sticky");
});
class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <nav className="navigation">
            <Link to="/" className="navigation__link">
              Home
            </Link>
            <Link to="/about" className="navigation__link">
              About
            </Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <BeerHome />
            </Route>
            <Route path="/about" component={About}></Route>
            <Route path="/:id" component={BeerSingle}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
