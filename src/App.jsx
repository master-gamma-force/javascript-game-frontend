import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Challenge from './pages/Challenge'
import Instructions from './pages/Instruction'

import './App.scss'
import LevelSelector from './pages/Selector'

export default function App() {
  return (
    <Router>
      <div className="header" />
      <div className="container-data">
        <Switch>
          <Route path="/:moduleId/:levelId/instructions">
            <Instructions />
          </Route>
          <Route path="/:moduleId/:levelId/challenge">
            <Challenge />
          </Route>
          <Route path="/editor">
            <Challenge />
          </Route>
          <Route path="/">
            <LevelSelector />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
