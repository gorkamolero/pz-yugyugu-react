import React from 'react'
import { Link } from "react-router-dom"
import { Fab } from '@material-ui/core'
import { Build, Palette } from '@material-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars'

import { TemplateProvider, initialState, TemplateReducer } from '../state/Template'

import Preview from '../components/preview/Preview'
import Content from '../components/content/Content'

function Builder() {
  return (
    <TemplateProvider initialState={initialState} reducer={TemplateReducer}>
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
          <main className="controlContainer">
            <Content />
          </main>
        </Scrollbars>
      </div>
      <Preview>
      </Preview>
    </div>
    </TemplateProvider>
  )
}

export default Builder