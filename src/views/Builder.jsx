import React from 'react'
import { Switch, Route, useRouteMatch, Link } from "react-router-dom"
import { Fab } from '@material-ui/core'
import { Build, Palette } from '@material-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars'

import Preview from '../components/preview/Preview'
import Content from '../components/content/Content'
import Style from '../components/style/Style'

function Home() {
  let match = useRouteMatch()
  return (
    <div className="builder">
      <div className="control">
        <nav className="controlNav builderNav">
          <Fab component={Link} to="/builder/content">
            <Build />
          </Fab>
          <Fab component={Link} to="/builder/style">
            <Palette />
          </Fab>
        </nav>
        <Scrollbars autoHide style={{width: '100%', height: '100%'}}>
          <div className="controlContainer">
            <Switch>
              <Route path={`${match.path}/content`}>
                <Content />
              </Route>
              <Route path={`${match.path}/style`}>
                <Style />
              </Route>
            </Switch>
          </div>
        </Scrollbars>
      </div>
      <Preview>
      </Preview>
    </div>
  )
}

export default Home