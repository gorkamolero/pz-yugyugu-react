import React from 'react'
import { TextField, Slider, Tooltip, Typography, Button, Dialog, Grid } from '@material-ui/core'
import { ChromePicker as ColorPicker } from 'react-color'
import { useTemplate } from '../../state/Template'

const Setting = ({
  id,
  title,
  type,
  value,
}) => {
  const [, dispatch] = useTemplate()
  const [modalOpen, setModalOpen] = React.useState(false)

  const onChange = (value) => dispatch({ type: 'updateField', id, value })

  if(!type) return null

  if(type === 'url' || type === 'text') return (
    <TextField
      label={title}
      value={value}
      fullWidth
      margin="normal"
      variant="outlined"
      onChange={(e) => onChange(e.target.value)}
    />
  )

  if (type === 'color') return (
    <>
      <Typography variant="body1" gutterBottom>{title}: {value}</Typography>
      <Button variant="outlined" onClick={() => setModalOpen(true)}>Choose Color</Button>
      <br/>
      
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <ColorPicker
          color={value}
          onChangeComplete={(color, event) => onChange(color.hex)}
        />
      </Dialog>
    </>
  )
  
  if (type === 'slider') return (
    <>
      <Typography variant="body1" gutterBottom>{title}: {value}px</Typography>
      <Slider
        // color="inherit"
        ValueLabelComponent={ValueLabelComponent}
        min={20}
        max={500}
        defaultValue={value}
        onChangeCommitted={(e, value) => onChange(value)}
      />
    </>
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