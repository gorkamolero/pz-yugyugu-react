import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { TemplateProvider } from './state/Template'

// import Home from './views/Home'
import Builder from './views/Builder'

import './App.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffa723',
      // dark: 
    },
  },
})

function App() {
  return (
    <TemplateProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App" id="pz-email-builder">
            <Switch>
              {/* <Route path="/builder">
                <Builder />
              </Route> */}
              <Route path="/">
                <Builder />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </TemplateProvider>
  );
}

export default App;
