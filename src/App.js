import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from './views/Home'
import Builder from './views/Builder'
import TemplateSelector from './views/TemplateSelector.jsx'

import PZ_Button from "./components/ui/pz-button";

import './App.scss'


function App() {
  return (
    <Router>
      <div className="App" id="pz-email-builder">
        <header className="AppHeader">
          <div className="AppTitle">
            <Link to={"/"}>
              <PZ_Button buttonText={"Email Builder"}/>
            </Link>
          </div>
          <div className="AppMenu">
            <PZ_Button buttonText={"Save"}/>
            <PZ_Button buttonText={"Exit"}/>
          </div>
        </header>
        <Switch>
          <Route path="/templates">
            <TemplateSelector />
          </Route>
          <Route path="/builder/:id">
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
