import React from 'react'
import { Fab, Fade } from '@material-ui/core'
import { RemoveRedEye as Eye } from '@material-ui/icons'
import { useTemplate, getPreview } from '../../state/Template'

const ControlNav = () => {
  const [data, dispatch] = useTemplate()

  return (
    <nav className="controlNav builderNav">
      <Fade in={(data.hasOwnProperty('changed'))}>
        <Fab onClick={() => getPreview(data.changed, dispatch)} size="small">
          <Eye />
        </Fab>
      </Fade>
    </nav>
  )
}

export default ControlNav