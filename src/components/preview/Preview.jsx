import React, { useState } from 'react'
import { useTemplate } from '../../state/Template'
import { Fab } from '@material-ui/core'
import { Smartphone, Laptop } from '@material-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars'

import PreviewSkeleton from './PreviewSkeleton'

function Preview(props) {
  const [data] = useTemplate()
  const [view, setView] = useState('desktop')
  return (
    <div className="control">
      <nav className="controlNav viewNav">
        <Fab onClick={() => setView('mobile')}> <Smartphone /> </Fab>
        <Fab onClick={() => setView('desktop')}> <Laptop /> </Fab>
      </nav>
      <div className={`controlContainer preview ${view}`}>
        {
          data && data.html
          ? <iframe srcdoc={data.html} frameBorder="0" />
          : (
          <Scrollbars autoHide style={{width: '100%', height: '100%'}}>  
            <PreviewSkeleton />
          </Scrollbars>
          )
        }
      </div>
    </div>
  )
}

export default Preview