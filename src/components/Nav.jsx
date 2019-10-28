import React from 'react'
import { AppBar, Toolbar, Typography, Button, Grid  } from '@material-ui/core'
import { Save, Close } from '@material-ui/icons'
import { useTemplate, sendData, closeBuilder } from '../state/Template'

const Nav = () => {
  const [data, dispatch] = useTemplate()
  
  return (
    <AppBar position="static" color="inherit" className="appbar">
      <Toolbar>
        <Grid
          container
          // direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6">
              Email Builder
            </Typography>
          </Grid>

          <Grid item>
            <Grid item container justify="flex-end" spacing={1}>
              <Grid item>
                <Button
                  variant="outlined"
                  disabled={!(data.hasOwnProperty('changed'))}
                  startIcon={<Save />}
                  onClick={sendData(data.changed, dispatch)}
                >
                    Save
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="outlined"
                  color="primary"
                  startIcon={<Close />}
                  onClick={closeBuilder(dispatch)}
                >
                    Exit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav