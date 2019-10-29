import React from 'react'
import styled from 'styled-components'
import { Grid, TextField, Slider, Tooltip, Typography, Dialog, Fab } from '@material-ui/core'
import { Palette } from '@material-ui/icons'
import { ChromePicker as ColorPicker } from 'react-color'
import { useTemplate } from '../../state/Template'

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

const Setting = ({
  id,
  title,
  type,
  value,
}) => {
  const [, dispatch] = useTemplate()

  const onChange = (value) => dispatch({ type: 'updateField', id, value })

  if(!type) return null

  if(type === 'url' || type === 'text') return (
    <TextField
      label={title}
      value={value}
      fullWidth
      margin="normal"
      // variant="outlined"
      key={id}
      onChange={(e) => onChange(e.target.value)}
    />
  )

  if (type === 'color') return (
    <FabColor title={title} value={value} onChange={onChange} />
  )
  
  if (type === 'slider') return (
    <div style={{ paddingTop: '24px' }}>
      <Typography variant="body1" gutterBottom>{title}: {value}px</Typography>
      <Slider
        // color="inherit"
        ValueLabelComponent={ValueLabelComponent}
        min={20}
        max={500}
        defaultValue={value}
        onChangeCommitted={(e, value) => onChange(value)}
      />
    </div>
  )

  else return null
}

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

export default Setting