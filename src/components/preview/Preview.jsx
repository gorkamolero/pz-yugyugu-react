import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import { Smartphone, Laptop } from '@material-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars'

import PreviewSkeleton from './PreviewSkeleton'

function Preview(props) {
  const [view, setView] = useState('desktop')
  return (
    <div className="control">
      <nav className="controlNav viewNav">
        <Fab onClick={() => setView('mobile')}> <Smartphone /> </Fab>
        <Fab onClick={() => setView('desktop')}> <Laptop /> </Fab>
      </nav>
      <Scrollbars autoHide style={{width: '100%', height: '100%'}}>
      
        <div className={`controlContainer preview ${view}`}>
          <PreviewSkeleton />
        </div>
      </Scrollbars>
    </div>
  )
}

export default Preview