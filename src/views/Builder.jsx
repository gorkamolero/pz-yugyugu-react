import React from 'react'
import { Switch, Route, useRouteMatch, Link } from "react-router-dom"
import { ArrowBack } from '@material-ui/icons'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Scrollbars } from 'react-custom-scrollbars'
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Preview from '../components/preview/Preview'
import Content from '../components/content/Content'
import Style from '../components/style/Style'

function Home() {
  let match = useRouteMatch();
  
  return (
    <div className="builder">
      <div className="control">
        <div className="controlHeader">
        
            <Link to="/templates">
              <ArrowBack />
            </Link>
            <p>
              Template name
            </p>
          <nav className="controlNav builderNav">
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button component={Link} to="/builder/content">Content</Button>
              <Button component={Link} to="/builder/style">Style</Button>
            </ButtonGroup>
          </nav>
        
        </div>
        
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
