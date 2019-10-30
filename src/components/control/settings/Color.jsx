import React from 'react'

import styled from 'styled-components'
import { Dialog, Fab, Grid, Typography } from '@material-ui/core'
import { Palette } from '@material-ui/icons'
import { ChromePicker as ColorPicker } from 'react-color'

const Fabulous = styled(Fab)`
  background-color: ${props => props.bgcolor};
  &:hover { background-color: ${props => props.bgcolor}; }
`

const Gridder = styled(Grid)`
  padding: 24px 0 12px;
`

const FabColor = (props) => {
  const [value, setValue] = React.useState(props.value)
  const [modalOpen, setModalOpen] = React.useState(false)

  const onChange = (color) => {
    props.onChange(color)
    setValue(color)
  }

  return (
    <Gridder
      component="article"
      container
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Fabulous
        onClick={() => setModalOpen(true)}
        bgcolor={value}
        size="small"
      >
        <Palette />
      </Fabulous>

      <Typography variant="body1" style={{ marginLeft: '12px' }}>{props.title}: {value}</Typography>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <ColorPicker
          color={value}
          onChangeComplete={(color, event) => onChange(color.hex)}
        />
      </Dialog>
    </Gridder>
  )
}

export default FabColor