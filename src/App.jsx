import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Froggy from "./pages/Froggy";
import Level from "./pages/Level";
import FilterInstructions from "./pages/FilterInstructions";

import "./App.scss";
import LevelSelector from "./pages/Selector";

const Header = styled.header``;
const Nav = styled.nav``;
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
const NavElement = styled.li`
  list-style-type: none;
`;

export default function App() {
  return (
    <Router>
      <div className="header"></div>
      {/*<Nav>
          <List>
            <NavElement>
              <Link to="/froggy">Froggy</Link>
            </NavElement>
            <NavElement>
              <Link to="/filter">Filter</Link>
            </NavElement>
            <NavElement>
              <Link to="/">Levels</Link>
            </NavElement>
          </List>
        </Nav>*/}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="container-data">
        <Switch>
          <Route path="/froggy">
            <Froggy />
          </Route>
          <Route path="/filter">
            <FilterInstructions />
          </Route>
          <Route path="/editor">
            <Level />
          </Route>
          <Route path="/">
            <LevelSelector />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
