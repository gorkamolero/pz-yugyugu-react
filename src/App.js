import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { TemplateProvider } from './state/Template'

import Home from './views/Home'
import Builder from './views/Builder'

import './App.scss'


function App() {
  return (
    <TemplateProvider>
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
    </TemplateProvider>
  );
}

export default App;
