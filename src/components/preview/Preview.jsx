import React, { useState } from 'react'
import { useTemplate } from '../../state/Template'
import { ButtonGroup, Button, Grid } from '@material-ui/core'
import { Smartphone, Laptop } from '@material-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars'

import PreviewSkeleton from './PreviewSkeleton'

function Preview(props) {
  const [data] = useTemplate()
  const [view, setView] = useState('desktop')
  return (
    <div className="control" style={{ padding: '24px' }}>
      <nav className="controlNav viewNav">
        <Grid container>
          <ButtonGroup>
            <Button
              className={view === 'mobile' ? 'active' : ''}
              onClick={() => setView('mobile')}
              startIcon={<Smartphone />}
            >
              Mobile
            </Button>
            <Button
              className={view === 'desktop' ? 'active' : ''}
              onClick={() => setView('desktop')}
              startIcon={<Laptop />}
            >
              Desktop
            </Button>
          </ButtonGroup>
        </Grid>
      </nav>

      <div className={`controlContainer preview ${view}`}>
        {
          data && data.html
          ? <iframe title="Preview" srcDoc={data.html} frameBorder="0" />
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