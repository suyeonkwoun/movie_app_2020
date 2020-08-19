import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "./Home";
import About from "./About";
import Detail from "./Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie/:id" exact={true} component={Detail} />
    </HashRouter>
  );
}

export default App;
