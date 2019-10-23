import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from './views/Home'
import Builder from './views/Builder'
import TemplateSelector from './views/TemplateSelector.jsx'

import PzButton from "./components/ui/PzButton";

import './App.scss'


function App() {
  return (
    <Router>
      <div className="App" id="pz-email-builder">
        <header className="AppHeader">
          <div className="AppTitle">
            <Link to={"/"}>
              <PzButton buttonText={"Email Builder"}/>
            </Link>
          </div>
          <div className="AppMenu">
            <PzButton buttonText={"Save"}/>
            <PzButton buttonText={"Exit"}/>
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
