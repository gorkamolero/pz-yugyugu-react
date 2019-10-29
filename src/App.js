import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { TemplateProvider } from './state/Template'

import { SnackbarProvider } from 'notistack'

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
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={3000}
        >
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
        </SnackbarProvider>
      </ThemeProvider>
    </TemplateProvider>
  );
}

export default App;
