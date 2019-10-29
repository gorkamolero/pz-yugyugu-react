import React from 'react'

import styled from 'styled-components'
import { Dialog, Fab, Grid, Typography } from '@material-ui/core'
import { Palette } from '@material-ui/icons'
import { ChromePicker as ColorPicker } from 'react-color'

const Fabulous = styled(Fab)`
  background-color: ${props => props.bgColor};
  &:hover { background-color: ${props => props.bgColor}; }
`

const FabColor = (props) => {
  const [value, setValue] = React.useState(props.value)
  const [modalOpen, setModalOpen] = React.useState(false)

  const onChange = (color) => {
    props.onChange(color)
    setValue(color)
  }

  return (
    <Grid
      component="article"
      container
      style={{ paddingTop: '24px' }}
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Fabulous
        onClick={() => setModalOpen(true)}
        bgColor={value}
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
    </Grid>
  )
}

export default FabColor