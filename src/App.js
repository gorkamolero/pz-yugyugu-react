import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from './views/Home'
import Builder from './views/Builder'

import './App.scss'


function App() {
  return (
    <Router>
      <div className="App" id="pz-email-builder">
        <Switch>
          <Route path="/builder">
            <Builder />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
