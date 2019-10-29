import React from 'react'
import { useSnackbar } from 'notistack'

import { AppBar, Toolbar, Typography, Button, Grid  } from '@material-ui/core'
import { Save, Close } from '@material-ui/icons'
import { useTemplate, sendData, closeBuilder } from '../state/Template'

const Nav = () => {
  const [data, dispatch] = useTemplate()
  const { enqueueSnackbar } = useSnackbar()
  
  const save = async () => {
    const fetch = await sendData(data.changed, dispatch)
    if (fetch && fetch.status) enqueueSnackbar(fetch.message, { variant: fetch.status })
  }

  const exit = async () => {
    const fetch = await closeBuilder(dispatch)
    if (fetch && fetch.status) enqueueSnackbar(fetch.message, { variant: fetch.status })
  }

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
                  onClick={() => save()}
                >
                    Save
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="outlined"
                  color="primary"
                  startIcon={<Close />}
                  onClick={() => exit()}
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