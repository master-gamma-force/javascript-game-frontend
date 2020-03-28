import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'

const Header = styled.header``
const Nav = styled.nav``
const List = styled.ul`
  display: flex;
  justify-content:space-evenly;
`
const NavElement = styled.li`
  list-style-type:none;
`

export default function App () {
  return (
    <Router>
      <Header>
        <Nav>
          <List>
            <NavElement>
              <Link to="/">Home</Link>
            </NavElement>
            <NavElement>
              <Link to="/about">About</Link>
            </NavElement>
            <NavElement>
              <Link to="/users">Users</Link>
            </NavElement>
          </List>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Header>
    </Router>
  )
}

function About () {
  return <h2>About</h2>
}

function Users () {
  return <h2>Users</h2>
}
