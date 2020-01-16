import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import BeerHome from "./components/beer-home/BeerHome";
import BeerSingle from "./components/beer-single/BeerSingle";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <BeerHome />
            </Route>
            <Route path="/:id" component={BeerSingle}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
