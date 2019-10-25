import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Preview from '../components/preview/Preview'
import Control from '../components/control/Control'

function Builder() {

  return (
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
  )
}

export default Builder