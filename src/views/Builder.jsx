import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Nav from '../components/Nav'
import Preview from '../components/preview/Preview'
import Control from '../components/control/Control'

function Builder() {

  // FETCH!

  return (
    <>
      <Nav />
      <div className="builder">
        <div className="control">
          <Scrollbars autoHide style={{width: '100%', height: '100%'}}>
            <main className="controlContainer">
              <Control />
            </main>
          </Scrollbars>
        </div>
        
        <Preview />
      </div>
    </>
  )
}

export default Builder