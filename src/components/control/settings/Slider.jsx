import React from 'react'
import { Typography, Slider, Tooltip } from '@material-ui/core'

const SuperSlider = ({
  title,
  value,
  onChange
}) => (
  <article style={{ paddingTop: '24px' }}>
    <Typography variant="body1" gutterBottom>{title}: {value}px</Typography>

    <Slider
      ValueLabelComponent={ValueLabelComponent}
      min={20}
      max={500}
      defaultValue={value}
      onChangeCommitted={(e, value) => onChange(value)}
    />
  </article>
)

const ValueLabelComponent = ({ children, open, value }) => {
  const popperRef = React.useRef(null)
  
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update()
    }
  })

  return (
    <Tooltip
      PopperProps={{ popperRef, }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  )
}

export default SuperSlider