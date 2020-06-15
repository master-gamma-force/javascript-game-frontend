import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Level from './pages/Level'
import FilterInstructions from './pages/FilterInstructions'
import Instructions from './pages/Instruction'

import './App.scss'
import LevelSelector from './pages/Selector'

export default function App() {
  return (
    <Router>
      <div className="header" />
      <div className="container-data">
        <Switch>
          <Route path="/filter">
            <FilterInstructions />
          </Route>
          <Route path="/:moduleId/:levelId/instructions">
            <Instructions />
          </Route>
          <Route path="/:moduleId/:levelId/challenge">
            <Instructions />
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
  )
}
