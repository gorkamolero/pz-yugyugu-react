import React from 'react'
import { useSnackbar } from 'notistack'

import { Grid, ButtonGroup, Button, Fade } from '@material-ui/core'
import { RemoveRedEye as Eye } from '@material-ui/icons'

import { useTemplate, getPreview } from '../../state/Template'


const ControlNav = ({ tab, setTab }) => {
  const [data, dispatch] = useTemplate()
  const { enqueueSnackbar } = useSnackbar()

  const preview = async () => {
    const fetch = await getPreview(data.changed, dispatch)
    if (fetch && fetch.status) enqueueSnackbar(fetch.message, { variant: fetch.status })
  }

  return (
    <Grid container spacing={1} justify="space-between" style={{
      padding: '24px 24px 0'
    }}>
      <Grid item>
        <ButtonGroup>
          {
            data.tabs && data.tabs.map(({ title }, i) => (
              <Button
                className={tab === i ? 'active' : ''}
                key={i}
                onClick={() => setTab(i)}
              >
                {title}
              </Button>
            ))
          }
        </ButtonGroup>
      </Grid>
      <Grid item>
        <Fade in={(data.hasOwnProperty('changed'))}>
          <Button
            variant="outlined"
            onClick={() => preview()}
            startIcon={<Eye />}
          >
            Preview
              </Button>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default ControlNav